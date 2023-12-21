import { useRecoilState, useRecoilValue } from "recoil";
import { medal } from "../asset";
import { buttonStyle, layoutStyle } from "../style";
import ClickButton from "./buttons/ClickButton";

import { AtomCurrency, AtomHistory } from "../store";

export default function MyPointTab({ history }: { history?: boolean }) {
  const [histories, setHistories] = useRecoilState(AtomHistory);

  const point = useRecoilValue(AtomCurrency);
  return (
    <div className={layoutStyle.point_wrap}>
      <div className={layoutStyle.my_point}>
        <h4 className={layoutStyle.my_point_text}>나의 포인트</h4>
        <div className={layoutStyle.point}>
          <img src={medal} alt={"포인트 이미지"} />
          {point.toLocaleString()}P
        </div>
      </div>
      {history && (
        <ClickButton
          text="내역보기"
          className={buttonStyle.history}
          clickHandler={() => setHistories(true)}
        />
      )}
    </div>
  );
}
