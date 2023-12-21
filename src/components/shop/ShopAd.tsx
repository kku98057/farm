import { buttonStyle, layoutStyle } from "../../style";
import ClickButton from "../buttons/ClickButton";

export default function ShopAd() {
  const adDatas = { title: "한정판 시지르\n11.20일까지" };

  const gotoAdLink = () => {};
  return (
    <div className={layoutStyle.shopad_wrap}>
      <div className={layoutStyle.shopad}>
        <h3>{adDatas.title}</h3>
        <div
          className="btns"
          style={{ justifyContent: "space-between", marginTop: "20px" }}
        >
          <ClickButton
            text="Begin"
            clickHandler={gotoAdLink}
            className={buttonStyle.shopad_btn}
          />
          {/* <ClickButton text="Begin" clickHandler={gotoAdLink} /> */}
        </div>
      </div>
    </div>
  );
}
