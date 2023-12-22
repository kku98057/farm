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
  const { mutate } = useUpdate({ url: "/api/friend/register" });
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
          console.error(error);
          setPopup({ text: "정확히 입력해주세요.", popup: true });
          setLoading(false);
        },
        onSuccess: () => {
          setPopup({ text: "초대되었습니다.", popup: true });
          // addAlarmHandler({ meg: "친구가 추가되었습니다." });
          setLoading(false);
        },
        onSettled: () => {
          queryClient.invalidateQueries({
            queryKey: ["/api/friend/list"],
          });
          queryClient.invalidateQueries({
            queryKey: ["/api/alarm/list"],
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
      .get(`${process.env.REACT_APP_BASE_URL}/api/friend/invite`, {
        headers: {
          // Authorization: `Bearer ${TOKEN}`,
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZWZjYTY2MWNiMDUzNTc3YjQ2M2Y5ZDEzYzEyOWY1MWRmZmMzOTIxODE5MDAzZTFlYzc4NzBjMjg4NzU3YjAzNWQ3NjcxMmIzMmVjM2RhNjQiLCJpYXQiOjE3MDMyMDcyMDYuMzY5OTM4LCJuYmYiOjE3MDMyMDcyMDYuMzY5OTQyLCJleHAiOjE3MDQ1MDMyMDYuMzQ5NjEyLCJzdWIiOiI3OCIsInNjb3BlcyI6W119.EDgc7sBIrZ34sv5iItjPEd9cgyP2_YVDzwk3_LpZBb_ufK__6KuaBfOjRM0_0RXpRyWXjP72t4VLqNHhgACE7SgteDIDvcq5Knj6OJGUFpFFBiZyx4g_5BdXhF3UiWN6TWXXGmQiHUVybwM_wp_THeq5dKTpMcVljkpXMO-0vgcy1DYITVNRHOhl46N0Wviby8xlmm61d26w15UIOihoBCaUhWqXnuj-vIs-x4Pe5xhL8Qrpy7oCkLY1wVx6-c_hRrtdkIFrnADsbOXNDR2gCLWrM3UCbFpQXyZNdj1oKx1dc_RR0l8rUUTNbhzlgrBKDCjkdNPCUggWdpW08wJ7AzfRMk1HTEQ7GcFEZLGN3GQ00wkmwZhswzUx4cAEl2ms1OdLy32FZOVGuyBPdPRWVw9nMKJLruQmpgid-xvBPZSFxaGpiljK0c9ck3SgG31AUcHxFdJRsFmi9eBOnhYqcyXXV6QvNa16KWq38EJ0tiogt73ea2mbu1SIaBzbzMe-pLhBHvjTuWjQ-7Zc6UsSJ7Xgbhkp1ifhcLnQQnzEfJe_zP8axdzZ4D2kfenpaAB4mGnDsXPg-0B3eTAd_jlEAxQT7TNCl4_xZSfqVFtYKScH-_lDq4AVpKbbXtqgmYLCixquZ-aQ1H9phkm4YetTarztJN2MSdYk-J65lWGa56I`,
          "Content-Type": "application/json",
        },
      })
      .then((res) =>
        navigator.clipboard
          .writeText(res.data.code)
          .then(() => {
            setLoading(false);
            setPopup({ text: "초대코드가 복사되었습니다.", popup: true });
          })
          .catch(() => setLoading(false))
      )
      .catch(() => setLoading(false));
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
