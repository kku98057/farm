import { useRecoilState, useSetRecoilState } from "recoil";
import useUpdate from "../hooks/useUpdate";
import { AtomLoading, AtomUserNickname } from "../store";
import SubmitButton from "./buttons/SubmitButton";
import { SubmitType } from "../types";

import { useState, useEffect } from "react";
import { layerStyle } from "../style";
import useGetAxios from "../hooks/useGetAxios";

import Loading from "./Loading";

export default function CreateNickname() {
  const setLoading = useSetRecoilState(AtomLoading);
  const { mutate, isSuccess, isError } = useUpdate({
    url: "/api/game/user/nickname",
    isAlert: "noAlert",
  });
  const [text, setText] = useRecoilState(AtomUserNickname);
  const [checkedNickName, setcheckedNickName] = useState("");

  const { data, isLoading, error } = useGetAxios({
    url: "/api/game/user/check-signup",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const submitHandler = (e: SubmitType) => {
    e.preventDefault();
    const LANG = /^[가-힣a-zA-Z]+$/;
    if (text === "") {
      setcheckedNickName("empty");
    } else if (!LANG.test(text)) {
      setcheckedNickName("not");
    } else {
      setLoading(true);
      setcheckedNickName("");
      mutate(
        { nickname: text },
        {
          onError: (error) => {
            setcheckedNickName("exit");
          },
          onSuccess: () => {},
        }
      );
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={layerStyle.nickname_tab}>
      <div className={layerStyle.nickname_wrap}>
        <form onSubmit={submitHandler}>
          <div className={layerStyle.nickname_inner}>
            <input
              className={layerStyle.nickanme_input}
              style={{
                border: checkedNickName !== "" ? "1px solid red" : "",
              }}
              type="text"
              maxLength={8}
              onChange={changeHandler}
              value={text}
              placeholder="닉네임을 설정하세요."
            />
            {checkedNickName === "empty" && (
              <span className={layerStyle.nickname_check}>
                닉네임을 입력하세요.
              </span>
            )}
            {checkedNickName === "not" && (
              <span className={layerStyle.nickname_check}>
                정상적인 닉네임이 아닙니다.
              </span>
            )}
            {checkedNickName === "exit" && (
              <span className={layerStyle.nickname_check}>
                존재하는 닉네임입니다.
              </span>
            )}
          </div>
          <div className="btns">
            <SubmitButton text="결정" />
          </div>
        </form>
      </div>
    </div>
  );
}
