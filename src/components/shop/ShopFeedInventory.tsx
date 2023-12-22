import { useEffect } from "react";
import { buttonStyle, layerStyle, tabStyle } from "../../style";
import { cat, dog, feed, horse, salad, watermelon } from "../../asset";
import { useState } from "react";
import ClickButton from "../buttons/ClickButton";
import { ClickType, MarketItemType, MarketType } from "../../types";
import useEat from "../../hooks/useEat";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  AtomCurrency,
  AtomFeed,
  AtomLevelPopup,
  AtomLoading,
} from "../../store";
import CreateTextAnimation from "../../Fn/CreateTextAnimation";
import useGetAxios from "../../hooks/useGetAxios";
import Popup from "../Popup";
import useUpdate from "../../hooks/useUpdate";
import { useQueryClient } from "@tanstack/react-query";

export default function ShopFeedInventory() {
  const queryClient = useQueryClient();
  const [popup, setPopup] = useState({ popup: false, type: "" });
  const setPopup2 = useSetRecoilState(AtomLevelPopup);
  const [globalLoading, setGlobalLoading] = useRecoilState(AtomLoading);
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
  const pickHandler = (list: MarketItemType, type: string) => {
    if (type === "ticket") {
    } else {
    }
    setPickItem(list);
    setPopup({ type: type, popup: true });
  };
  const buyHandler = () => {
    if (currency < amountPrice()) {
      alert("포인트가 부족합니다..");
    } else {
      setGlobalLoading(true);
      mutate(
        {
          item_id: pickItem.id,
          amount: quantity,
        },

        {
          onError: (error) => {
            setGlobalLoading(false);
            console.error(error);
            alert(error);
          },
          onSuccess: () => {
            setGlobalLoading(false);

            setCurrency(currency - amountPrice());
            setPopup2({ text: "구매하였습니다.", popup: true });
          },
          onSettled: () => {
            queryClient.invalidateQueries({
              queryKey: ["/api/inventory/feed"],
            });
          },
        }
      );
    }
  };

  const cancleHandler = () => {
    setPopup({ popup: false, type: "" });
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
          <div className={tabStyle.feed_data}>
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
          </div>
          <div className={tabStyle.feed_tab_btns}>
            <ClickButton
              text="포인트로 구매"
              clickHandler={() => pickHandler(list, "point")}
              className={`${buttonStyle.buyBtn} ${buttonStyle.wideBtn}  ${buttonStyle.pointColor} `}
            />
            {list.name === "일반먹이" && (
              <ClickButton
                text="먹이권으로 구매"
                clickHandler={() => pickHandler(list, "ticket")}
                className={`${buttonStyle.buyBtn} ${buttonStyle.wideBtn}  ${buttonStyle.ticketColor}`}
              />
            )}
          </div>
        </li>
      );
    });
  };

  return (
    <>
      {!isLoading ? (
        <>
          {FeedList()}
          {popup.popup && (
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
              {popup.type === "point" ? (
                <div className={layerStyle.popup_price}>
                  가격 : {amountPrice().toLocaleString()}P
                </div>
              ) : (
                <div className={layerStyle.popup_price}>
                  가격 : {amountPrice().toLocaleString()}개
                </div>
              )}

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
