import { tabDatasType } from "../../types";
import { MdArrowBackIos } from "react-icons/md";
import { tabStyle } from "../../style";
import { AtomFooterTab, AtomHistory } from "../../store";
import { useSetRecoilState } from "recoil";
import BackButton from "../buttons/BackButton";
export default function TabTop({
  tabDatas,

  types,
}: {
  tabDatas?: tabDatasType;

  types: string;
}) {
  return (
    <div className={tabStyle.tab_top}>
      {tabDatas?.name && <h4>{tabDatas.name}</h4>}
      {tabDatas?.des && <p>{tabDatas.des}</p>}
    </div>
  );
}
