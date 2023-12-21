import { layoutStyle } from "../../style";
import { FaHeart, FaDumbbell } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";

import { CgSmileMouthOpen } from "react-icons/cg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AtomFooterTab, AtomHeaderTab, AtomShopTab } from "../../store";
import ShopRestTab from "./ShopRestTab";
import { ShopCategory } from "../../config/constant";
import { tabDatasType } from "../../types";
import ShopFoodTab from "./ShopFoodTab";
import ShopExcerciseTab from "./ShopExcerciseTab";
import ShopEtcTab from "./ShopEtcTab";
import useGetAxios from "../../hooks/useGetAxios";

export default function ShopCateogry() {
  const [shoptabState, setShoptabState] = useRecoilState(AtomShopTab);
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);
  const categories = [
    {
      name: "먹이",
      img: <PiForkKnifeFill />,
      title: "food",
      // title: "food",
    },
    {
      name: "휴식",
      img: <FaHeart />,
      title: "",
      // title: "rest",
    },
    {
      name: "운동",
      img: <FaDumbbell />,
      title: "",
      // title: "excercise",
    },
    {
      name: "기타",
      img: <CgSmileMouthOpen />,
      title: "",
      // title: "etc",
    },
  ];
  const clickHnadler = (types: string) => {
    setHeaderTab(types);
  };

  return (
    <>
      <div className={layoutStyle.shop_category_wrap}>
        <div className={layoutStyle.shop_category}>
          <h3>카테고리</h3>
          <ul className={layoutStyle.shop_category_ul}>
            {categories.map((item, idx) => (
              <li
                key={`${item.name}_${idx}`}
                className={idx > 1 ? `${layoutStyle.colors}` : ""}
                onClick={() => {
                  item.title !== "" && clickHnadler(item.title);
                }}
              >
                <div className={layoutStyle.shop_category_img}>{item.img}</div>
                <div className={layoutStyle.shop_category_title}>
                  <h4>{item.name}</h4>
                </div>
                {item.title === "" && (
                  <div className={layoutStyle.commin_soon}>
                    <span>Comming Soon</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
