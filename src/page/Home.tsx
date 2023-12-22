import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomHeaderTab,
  AtomMyCharacter,
  AtomUser,
  AtomMyFeedTime,
  AtomLevelPopup,
  AtomAccountLevelModel,
  AtomAnimalTabCurrentTabAnimal,
  AtomFeedPopup,
  AtomFeed,
  AtomAnimalsList,
  AtomPendingFriendList,
  AtomRejectFriendList,
  AtomApprovalFriendList,
  AtomLoading,
} from "../store";
import ShopTab from "../components/tabs/ShopTab";

import { useState, useEffect } from "react";
import Animals from "../components/Animals";
import {
  HeaderTabDatas,
  ShopCategory,
  accountLevelModel,
} from "../config/constant";

import AnimalsTab from "../components/tabs/animals/AnimalsTab";

import AlarmTab from "../components/header/alarm/AlarmTab";
import FriendTab from "../components/header/friend/FriendTab";

import AddFriend from "../components/header/friend/AddFriend";

import ShopFoodTab from "../components/shop/ShopFoodTab";

import FeedInventoryTab from "../components/tabs/feedInven/FeedInventoryTab";

import useGetAxios from "../hooks/useGetAxios";
import { Container, Footer, Header } from "../components";

import EmotionInventoryTab from "../components/tabs/EmotionInventory/EmotionInventoryTab";
import Popup from "../components/Popup";
import ClickButton from "../components/buttons/ClickButton";
import { buttonStyle } from "../style";

import AnimalListDetailTab from "../components/tabs/animals/AnimalListDetailTab";
import FeedPopup from "../components/FeedPopup";
import Loading from "../components/Loading";
import CreateNickname from "../components/CreateNickname";
import { nextLevel } from "../Fn/nextLevel";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);

  const setMyCharacter = useSetRecoilState(AtomMyCharacter);

  const [popup, setPopup] = useRecoilState(AtomLevelPopup);
  const feedPopup = useRecoilValue(AtomFeedPopup);
  const [userData, setUserData] = useRecoilState(AtomUser);
  const [headerTab, setHeaderTab] = useRecoilState(AtomHeaderTab);
  const setLevelModel = useSetRecoilState(AtomAccountLevelModel);
  const setAnimalsList = useSetRecoilState(AtomAnimalsList);
  const currentAniamlTabId = useRecoilValue(AtomAnimalTabCurrentTabAnimal);
  const setFeedTime = useSetRecoilState(AtomMyFeedTime);
  const setMyFeed = useSetRecoilState(AtomFeed);
  const setPendingFriendList = useSetRecoilState(AtomPendingFriendList);
  const setRejectFriendList = useSetRecoilState(AtomRejectFriendList);
  const setApprovalFriendList = useSetRecoilState(AtomApprovalFriendList);
  const [globalLoading, setGlobalLoading] = useRecoilState(AtomLoading);

  const HeaderTab = () => {
    switch (headerTab) {
      case "alarm":
        return <AlarmTab HeaderTabDatas={HeaderTabDatas["alarm"]} />;
      case "friend":
        return <FriendTab HeaderTabDatas={HeaderTabDatas["friend"]} />;
      case "addFriend":
        return <AddFriend HeaderTabDatas={HeaderTabDatas["addFriend"]} />;
      case "shop":
        return <ShopTab tabDatas={HeaderTabDatas["shop"]} />;
      case "emotion_inventory":
        return (
          <EmotionInventoryTab tabDatas={HeaderTabDatas["emotion_inventory"]} />
        );
      case "feed_inventory":
        return <FeedInventoryTab tabDatas={HeaderTabDatas["feed_inventory"]} />;
      case "animals":
        return <AnimalsTab tabDatas={HeaderTabDatas["animals"]} />;
      case "animals_detail":
        return (
          <AnimalListDetailTab
            tabDatas={HeaderTabDatas["animals_detail"]}
            currentAniamlTabId={currentAniamlTabId}
          />
        );

      case "food":
        return <ShopFoodTab tabDatas={ShopCategory["food"]} />;

      default:
        return "";
    }
  };
  // 데이터
  const { data, isLoading } = useGetAxios({ url: "/api/main" });
  const { data: feedInventory, isLoading: isLoadingFeedInventory } =
    useGetAxios({ url: "/api/inventory/feed" });
  const { data: animalsData, isLoading: isLoadingAnimalsData } = useGetAxios({
    url: `/api/animal/list`,
  });

  // const { data: friendPendingData, isLoading: isLoadingFriendPendingData } =
  //   useGetAxios({
  //     url: "/api/friend/list",
  //     params: { status: "pending" },
  //   });
  // const { data: friendRejectData, isLoading: isLoadingFriendRejectData } =
  //   useGetAxios({
  //     url: "/api/friend/list",
  //     params: { status: "reject" },
  //   });
  // const { data: friendApprovalData, isLoading: isLoadingFriendApprovalData } =
  //   useGetAxios({
  //     url: "/api/friend/list",
  //     params: { status: "approval" },
  //   });

  // 메인데이터
  useEffect(() => {
    if (!isLoading && data) {
      setMyCharacter({
        ...data.animal,
        next_exp:
          accountLevelModel[
            nextLevel(data.animal.level) as keyof typeof accountLevelModel
          ].nextExp,
      });
      setUserData(data.user);

      // 서버와의 시간차이 때문에 1초 추가
      setFeedTime({
        gain_feed: 3000,

        use_feed: 0,
      });
    }
  }, [isLoading, data]);
  // 경험치테이블 데이터

  //동물리스트
  useEffect(() => {
    if (animalsData && !isLoadingAnimalsData) {
      setAnimalsList(animalsData.list);
    }
  }, [animalsData, isLoadingAnimalsData]);
  // 먹이 데이터
  useEffect(() => {
    if (feedInventory && !isLoadingFeedInventory) {
      setMyFeed(feedInventory.inventories.items);
    }
  }, [feedInventory, isLoadingFeedInventory]);
  // useEffect(() => {
  //   if (friendPendingData && !isLoadingFriendPendingData) {
  //     setPendingFriendList(friendPendingData.list);
  //   }
  //   if (friendRejectData && !isLoadingFriendRejectData) {
  //     setRejectFriendList(friendRejectData.list);
  //   }
  //   if (friendApprovalData && !isLoadingFriendApprovalData) {
  //     setApprovalFriendList(friendApprovalData.list);
  //   }
  // }, [
  //   friendPendingData,
  //   isLoadingFriendPendingData,
  //   friendRejectData,
  //   isLoadingFriendRejectData,
  //   friendApprovalData,
  //   isLoadingFriendApprovalData,
  // ]);

  useEffect(() => {
    if (searchParams) {
      const tab: any = searchParams.get("tab");
      setHeaderTab(tab);
    }
  }, []);

  return (
    <>
      {!isLoading && !isLoadingFeedInventory && !isLoadingAnimalsData ? (
        <>
          {userData.nickname === "" ? (
            <CreateNickname />
          ) : (
            <>
              <Header />
              <main>
                <section>
                  <Container>
                    <Animals />
                  </Container>
                </section>
              </main>
              <Footer />
              {HeaderTab()}
              {feedPopup && <FeedPopup />}
              {popup.popup && (
                <Popup sentence={popup.text}>
                  <div className="btns" style={{ marginTop: 0 }}>
                    <ClickButton
                      text="닫기"
                      className={buttonStyle.buyBtn}
                      clickHandler={() =>
                        setPopup((prev) => ({
                          ...prev,
                          popup: false,
                          text: "",
                        }))
                      }
                    />
                  </div>
                </Popup>
              )}
              {globalLoading && <Loading />}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
