import { layerStyle, tabStyle } from "../../style";
import { ShopTabs } from "../../types";
import TabTop from "../layout/TabTop";

export default function ShopExcerciseTab({ tabDatas }: { tabDatas: ShopTabs }) {
  return (
    <div className={tabStyle.tab_wrap}>
      {/* <TabTop tabDatas={tabDatas} name="shop" types="footer" /> */}
    </div>
  );
}
