import { useState } from "react";
import { buttonStyle, tabStyle } from "../../../style";
import SubmitButton from "../../buttons/SubmitButton";
import { ChangeType, SubmitType } from "../../../types";
import useUpdate from "../../../hooks/useUpdate";
import { useSetRecoilState } from "recoil";
import { AtomFeedPopup, AtomLevelPopup, AtomLoading } from "../../../store";
import useAlarm from "../../../hooks/useAlarm";
import ClickButton from "../../buttons/ClickButton";
import axios from "axios";
import { APIS } from "../../../ennum";
import { useLocation, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function FriendInvite() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const TOKEN = searchParams.get("token");
  const setLoading = useSetRecoilState(AtomLoading);
  const [code, setCode] = useState<string>("");
  const setPopup = useSetRecoilState(AtomLevelPopup);
  const queryClient = useQueryClient();
  const { addAlarmHandler } = useAlarm();
  const { mutate } = useUpdate({ url: "/api/game/friend/register" });
  const inviteHandler = (e: SubmitType) => {
    e.preventDefault();
    if (code === "") {
      return setPopup({ text: "초대코드를 입력해주세요.", popup: true });
    }
    setLoading(true);
    mutate(
      { code: code },
      {
        onError: (error) => {
          setPopup({ text: "정확히 입력해주세요.", popup: true });
          setLoading(false);
        },
        onSuccess: () => {
          setPopup({ text: "초대되었습니다.", popup: true });

          setLoading(false);
        },
        onSettled: () => {
          queryClient.invalidateQueries({
            queryKey: ["/api/game/friend/list"],
          });
          queryClient.invalidateQueries({
            queryKey: ["/api/game/alarm/list"],
          });
        },
      }
    );
  };
  const inviteCodeHandler = (e: ChangeType) => {
    setCode(e.target.value);
  };
  const copyHandler = () => {
    setLoading(true);

    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/game/friend/invite`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        navigator.clipboard
          .writeText(res.data.code)
          .then((res) => {
            setLoading(false);
            setPopup({ text: "초대코드가 복사되었습니다.", popup: true });
          })
          .catch((error) => {
            setLoading(false);
          });
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <form onSubmit={inviteHandler} className={tabStyle.friend_invite}>
      <div className={tabStyle.friend_invite_code}>
        <h4>친구 등록</h4>
        <p>
          새로운 친구를 등록해 <br />
          친구의 동물을 보러가보세요!
        </p>
        <div className={tabStyle.friend_input_wrap}>
          <input
            type="text"
            value={code}
            placeholder="초대코드를 입력해주세요."
            onChange={inviteCodeHandler}
          />
          <SubmitButton text="등록하기" className={buttonStyle.feedBtn} />
        </div>
      </div>
      <ClickButton
        text="초대 링크 복사하기"
        clickHandler={copyHandler}
        className={tabStyle.friend_copy}
      />
    </form>
  );
}
