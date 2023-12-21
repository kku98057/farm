import { tabStyle } from "../../style";
import { buttonStyle } from "../../style";
import { MarketItemType, MarketType } from "../../types";
import ClickButton from "../buttons/ClickButton";
import { TabListType, ShopItemList } from "../../types";
import { useSetRecoilState } from "recoil";
import { AtomMyFoodList } from "../../store";
import Loading from "../Loading";
import { home, 고급먹이, 최고급먹이 } from "../../asset";

export default function Tab({
  setPopup,
  setPickItem,
  category,
  data,
}: {
  category?: string;
  list?: TabListType[];
  setPopup: (state: boolean) => void;
  setPickItem: (state: MarketItemType) => void;
  data: MarketType;
}) {
  return (
    <>
      <ul className={tabStyle.item_ul}>
        {data.property.map((li, idx) => (
          <TabList
            key={`${li.name}_${idx}`}
            category={data.category}
            list={li}
            setPopup={setPopup}
            setPickItem={setPickItem}
          />
        ))}
      </ul>
    </>
  );
}

const TabList = ({
  list,
  setPopup,
  setPickItem,
  category,
}: {
  category: string | undefined;
  list: MarketItemType;
  setPopup: (state: boolean) => void;
  setPickItem: (state: MarketItemType) => void;
}) => {
  const setMyFoodList = useSetRecoilState(AtomMyFoodList);
  const buyHandler = (list: MarketItemType) => {
    setPopup(true);
    setPickItem({
      name: list.name,
      id: list.id,
      price: list.price,
      exp: list.exp,
    });
    setMyFoodList(list);
  };

  const images = () => {
    switch (list.name) {
      case "의자":
        return home;
      case "고급먹이":
        return 고급먹이;
      case "최고급 먹이":
        return 최고급먹이;
    }
  };

  return (
    <li className={tabStyle.tab_item}>
      <div className={tabStyle.tab_left}>
        <div className={tabStyle.item_img}>
          <img src={images()} alt={list.name} />
        </div>
        <div className={tabStyle.item_data}>
          <div className={tabStyle.name}>
            <span>{list.name}</span>
          </div>
          <div className={tabStyle.price}>
            <span>{list.price.toLocaleString()}P</span>
          </div>
        </div>
      </div>

      <ClickButton
        text="구매하기"
        clickHandler={() => buyHandler(list)}
        className={buttonStyle.buyBtn}
      />
    </li>
  );
};
