import { useRecoilValue } from "recoil";
import useGetAxios from "../../../hooks/useGetAxios";
import { scoreStyle, tabStyle } from "../../../style";
import {
  MyFriendAnimalViewType,
  MyFriendViewType,
  tabDatasType,
} from "../../../types";
import BackButton from "../../buttons/BackButton";
import { AtomHeaderTab } from "../../../store";

import Lottie from "lottie-react";
import { AnimalListStatus } from "../../../config/constant";

export default function FriendView({ tabDatas }: { tabDatas: tabDatasType }) {
  const headerTab = useRecoilValue(AtomHeaderTab);
  const { data, isLoading } = useGetAxios({
    url: "/api/game/friend/detail",
    params: { friend_id: headerTab.params?.friend_id },
  });

  return (
    <>
      <div className={tabStyle.tab_wrap}>
        <BackButton back={""} />
        {data && !isLoading && (
          <>
            <FriendCharacter data={data.animal} />
            <FriendInfo data={data} />
          </>
        )}
      </div>
    </>
  );
}

function FriendInfo({ data }: { data: MyFriendViewType }) {
  return (
    <div className={tabStyle.animal_status_wrap}>
      <FriendScore name={data.animal.name} />

      <div className={tabStyle.animal_status}>
        <AnimalStatList title="동물레벨" status={data.animal.level} />
        <AnimalStatList title="동물상태" status={data.animal.status} />
      </div>
    </div>
  );
}

function FriendScore({ name }: { name: string }) {
  return (
    <div className={scoreStyle.sleep_score}>
      <div className={scoreStyle.sleep_exp}>
        <span>{name}</span>
      </div>
    </div>
  );
}
function AnimalStatList({
  title,

  status,
}: {
  title: string;
  status: number | string;
}) {
  const unit = (title: string) => {
    switch (title) {
      case "동물레벨":
        return "Lv";
      case "동물상태":
        return "상태";
      case "누적 수면점수":
        return "점";
      case "계정 레벨":
        return "Lv";
      case "포인트":
        return "P";
      case "wakeup":
        return "보통상태";
      case "active":
        return "활동중.";
      case "sleep":
        return "자는상태";
      default:
        return;
    }
  };
  const transformStatus = (status: string | number) => {
    switch (status) {
      case "wakeup":
        return "보통";
      case "active":
        return "활동중.";
      case "sleep":
        return "자는";
      default:
        return status;
    }
  };

  return (
    <div className={tabStyle.animal_status_list}>
      <p className={tabStyle.animal_status_title}>{title}</p>
      <p className={tabStyle.animal_status_data}>
        {transformStatus(status)}
        {/* {status?.toLocaleString()} */}
        {unit(title)}
      </p>
    </div>
  );
}
function FriendCharacter({ data }: { data: MyFriendAnimalViewType }) {
  function getImageSrc(character: MyFriendAnimalViewType): string {
    const { name, status, evolution_status, action } = character;
    const skinFilter = action?.filter(
      (item) => item.category === transformStatus(character.status)
    )[0];
    const skincode = skinFilter?.properties[0]?.skin_code || 1;

    return (
      AnimalListStatus[name]?.[status]?.[evolution_status]?.[
        skincode.toString()
      ] ?? ""
    );
  }
  const transformStatus = (status: string) => {
    switch (status) {
      case "wakeup":
        return "기본";
      case "active":
        return "활동";
      case "sleep":
        return "잠든";
      default:
        return;
    }
  };

  return (
    <>
      <div style={{ position: "relative", width: 240, margin: "0 auto" }}>
        {data.evolution_status === "final" && (
          <Lottie animationData={getImageSrc(data)} loop={true}></Lottie>
        )}
        {data.evolution_status !== "final" && (
          <img src={getImageSrc(data)} alt={data.name} />
        )}
      </div>
    </>
  );
}
