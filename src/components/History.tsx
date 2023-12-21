import { medal } from "../asset";
import { layerStyle, tabStyle } from "../style";
import { tabDatasType } from "../types";
import MyPointTab from "./MyPoint";
import Notice from "./Notice";
import TabTop from "./layout/TabTop";
export default function History({ tabDatas }: { tabDatas: tabDatasType }) {
  const notice_list = [
    "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
    "계절 상품은 조기 종료 될 수 있습니다.",
  ];
  return (
    <div className={tabStyle.tab_wrap} style={{ zIndex: 3 }}>
      <MyPointTab />
      <div className={tabStyle.tab_inner}>
        <MyHistory />
      </div>
    </div>
  );
}

const MyHistory = () => {
  const histories = [
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
    {
      title: "음식1 구매",
      point: -10,
      date: "2023-11-15 12:23:43",
    },
  ];
  return (
    <div className={layerStyle.history_wrap}>
      <h5>사용 내역</h5>
      <ul className={layerStyle.history}>
        {histories.map((history, idx) => (
          <MyHistoryList history={history} key={`${history.title}_${idx}`} />
        ))}
      </ul>
    </div>
  );
};

const MyHistoryList = ({
  history,
}: {
  history: { title: string; point: number; date: string };
}) => {
  return (
    <li className={layerStyle.history_list}>
      <div className={layerStyle.left}>
        <div className={layerStyle.date}>{history.date}</div>
        <div className={layerStyle.title}>{history.title}</div>
      </div>
      <div className={layerStyle.right}>
        <div className={layerStyle.point}>
          {history.point > 0 && "+"}
          {history.point}
          <img src={medal} alt="포인트 이미지" />
        </div>
      </div>
    </li>
  );
};
