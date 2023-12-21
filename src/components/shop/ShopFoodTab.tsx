import { useEffect, useState } from "react";
import useGetAxios from "../../hooks/useGetAxios";
import { buttonStyle, layerStyle, tabStyle } from "../../style";
import { MarketItemType, ShopTabs } from "../../types";
import TabTop from "../layout/TabTop";
import Tab from "../tabs/Tab";
import Popup from "../Popup";
import { FiMinus, FiPlus } from "react-icons/fi";
import ClickButton from "../buttons/ClickButton";
import { AtomCurrency, AtomUser } from "../../store";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useUpdate from "../../hooks/useUpdate";
import Cookies from "js-cookie";
import Loading from "../Loading";
import BackButton from "../buttons/BackButton";

export default function ShopFoodTab({ tabDatas }: { tabDatas: ShopTabs }) {
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [currency, setCurrency] = useRecoilState(AtomCurrency);

  const [userDatas, setUserDatas] = useRecoilState(AtomUser);

  const [pickItem, setPickItem] = useState<MarketItemType>({
    name: "",
    id: null,
    price: 0,
    exp: 0,
  });
  const { data: cateogryDatas, isLoading: loadingCategory } = useGetAxios({
    url: "/api/category",
  });

  const { mutate, isSuccess } = useUpdate({
    url: `/api/market/purchase`,
  });
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
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  };
  const [amountPrice, setAmountPrice] = useState(0);

  const buyHandler = () => {
    if (userDatas.currency < amountPrice) {
      alert("포인트가 부족합니다..");
    } else {
      setPopup(false);

      setUserDatas((prev) => ({
        ...prev,
        currency: prev.currency - amountPrice,
      }));
      mutate({
        item_id: pickItem.id,
        amount: quantity,
      });
    }
    setPopup2(true);
  };

  useEffect(() => {
    if (isSuccess) {
      setCurrency(currency - amountPrice);
      setPopup(false);
    }
  }, [isSuccess]);
  useEffect(() => {
    setAmountPrice(pickItem.price * quantity);
  }, [quantity, pickItem.price]);

  const { data, isLoading } = useGetAxios({ url: "/api/market/list" });

  return (
    <div className={tabStyle.tab_wrap}>
      <BackButton back="shop" title="먹이" />

      <div className={tabStyle.tab_inner}>
        {!isLoading ? (
          <Tab
            setPopup={setPopup}
            setPickItem={setPickItem}
            category="feed"
            data={data.list[1]}
          />
        ) : (
          <Loading />
        )}
      </div>

      {popup && (
        <Popup text={`${pickItem.name}`} sentence="을/를 구매하시겠습니까?">
          <div className={layerStyle.quantity}>
            <FiMinus onClick={minusClick} />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            {/* <span>{quantity}</span> */}
            <FiPlus onClick={plusClick} />
          </div>
          <div className={layerStyle.popup_price}>
            가격 : {amountPrice.toLocaleString()}P
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
      {popup2 && (
        <Popup sentence="구매하였습니다.">
          <div className="btns">
            <ClickButton
              clickHandler={() => setPopup2(false)}
              text="닫기"
              className={buttonStyle.buyBtn}
            />
          </div>
        </Popup>
      )}
    </div>
  );
}
