import { useEffect } from "react";
import { buttonStyle, layerStyle, tabStyle } from "../../style";
import { cat, dog, feed, horse, salad, watermelon } from "../../asset";
import { useState } from "react";
import ClickButton from "../buttons/ClickButton";
import { ClickType, MarketItemType, MarketType } from "../../types";
import useEat from "../../hooks/useEat";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AtomCurrency, AtomFeed, AtomLevelPopup } from "../../store";
import CreateTextAnimation from "../../Fn/CreateTextAnimation";
import useGetAxios from "../../hooks/useGetAxios";
import Popup from "../Popup";
import useUpdate from "../../hooks/useUpdate";

export default function ShopFeedInventory() {
  const [popup, setPopup] = useState(false);
  const setPopup2 = useSetRecoilState(AtomLevelPopup);

  const [myFeed, setMyFeed] = useRecoilState(AtomFeed);

  const [pickItem, setPickItem] = useState<MarketItemType>({
    name: "",
    id: null,
    price: 0,
    exp: 0,
  });
  const { data, isLoading } = useGetAxios({
    url: "/api/market/list",
    params: { category_id: 2 },
  });

  const [currency, setCurrency] = useRecoilState(AtomCurrency);

  const { mutate, isSuccess } = useUpdate({
    url: `/api/market/purchase`,
  });
  const pickHandler = (list: MarketItemType) => {
    setPopup(true);
    setPickItem(list);
  };
  const buyHandler = () => {
    if (currency < amountPrice()) {
      alert("포인트가 부족합니다..");
    } else {
      mutate({
        item_id: pickItem.id,
        amount: quantity,
      });
      setMyFeed((prev) =>
        prev.map((item) => ({
          ...item,
          quantity: item.name === pickItem.name ? quantity : item.quantity,
        }))
      );
      setCurrency(currency - amountPrice());
      setPopup2({ text: "구매하였습니다.", popup: true });
    }
  };

  const cancleHandler = () => {
    setPopup(false);
    setPickItem({
      name: "",
      id: null,
      price: 0,
      exp: 0,
    });
    setQuantity(1);
  };
  const [quantity, setQuantity] = useState<number>(1);
  const minusClick = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const plusClick = () => {
    if (quantity < 100) {
      setQuantity((prev) => prev + 1);
    }
  };
  const amountPrice = () => {
    const result = pickItem.price * quantity;
    return result;
  };

  const FeedList = () => {
    return data.list.map((list: MarketItemType) => {
      return (
        <li
          key={`${list.name}_feed_shop`}
          className={tabStyle.feed_list}
          style={{
            gap: 0,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={tabStyle.feed_tab_img}>
            <img src={feed} alt={list.name} />
          </div>
          <div className={tabStyle.feed_tab_data}>
            <h3>
              {list.name}
              <span>({list.exp}exp)</span>
            </h3>
            <span>가격 : {list.price.toLocaleString()}P</span>
          </div>
          <ClickButton
            text="구매"
            clickHandler={() => pickHandler(list)}
            className={buttonStyle.buyBtn}
          />
        </li>
      );
    });
  };

  return (
    <>
      {!isLoading ? (
        <>
          {FeedList()}
          {popup && (
            <Popup text={`${pickItem.name}`} sentence="을/를 구매하시겠습니까?">
              <div className={layerStyle.quantity}>
                <FiMinus onClick={minusClick} />
                <input
                  style={{ all: "unset", width: 50, textAlign: "center" }}
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <FiPlus onClick={plusClick} />
              </div>
              <div className={layerStyle.popup_price}>
                가격 : {amountPrice().toLocaleString()}P
              </div>
              <div className="btns">
                <ClickButton
                  text="취소하기"
                  clickHandler={cancleHandler}
                  className={buttonStyle.buyBtn}
                />
                <ClickButton
                  text="구매하기"
                  clickHandler={buyHandler}
                  className={buttonStyle.buyBtn}
                />
              </div>
            </Popup>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
