import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomHeaderTab,
  AtomMyCharacter,
  AtomUser,
  AtomLevelPopup,
  AtomAnimalTabCurrentTabAnimal,
  AtomFeedPopup,
  AtomFeed,
  AtomLoading,
  AtomCurrency,
  AtomAlarm,
} from "../store";
import ShopTab from "../components/tabs/ShopTab";

import { useEffect } from "react";
import Animals from "../components/Animals";
import { HeaderTabDatas, ShopCategory } from "../config/constant";

import Inventory from "../components/tabs/inventory/Inventory";

import AlarmTab from "../components/header/alarm/AlarmTab";
import FriendTab from "../components/header/friend/FriendTab";

import useGetAxios from "../hooks/useGetAxios";
import { Container, Footer, Header } from "../components";

import Popup from "../components/Popup";
import ClickButton from "../components/buttons/ClickButton";
import { buttonStyle } from "../style";

import AnimalListDetailTab from "../components/tabs/animals/AnimalListDetailTab";
import FeedPopup from "../components/FeedPopup";
import Loading from "../components/Loading";

import { useLocation, useSearchParams } from "react-router-dom";
import FriendView from "../components/header/friend/FriendView";

export default function Home() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);

  const setMyCharacter = useSetRecoilState(AtomMyCharacter);

  const [popup, setPopup] = useRecoilState(AtomLevelPopup);
  const feedPopup = useRecoilValue(AtomFeedPopup);
  const [userData, setUserData] = useRecoilState(AtomUser);
  const [headerTab, setHeaderTab] = useRecoilState(AtomHeaderTab);

  const currentAniamlTabId = useRecoilValue(AtomAnimalTabCurrentTabAnimal);

  const setMyFeed = useSetRecoilState(AtomFeed);
  const setMainCurrencyData = useSetRecoilState(AtomCurrency);
  const setMainCurrencyAlarmData = useSetRecoilState(AtomAlarm);

  const [globalLoading, setGlobalLoading] = useRecoilState(AtomLoading);

  const HeaderTab = () => {
    switch (headerTab.name) {
      case "alarm":
        return <AlarmTab HeaderTabDatas={HeaderTabDatas["alarm"]} />;
      case "friend":
        return <FriendTab HeaderTabDatas={HeaderTabDatas["friend"]} />;
      case "shop":
        return <ShopTab tabDatas={HeaderTabDatas["shop"]} />;
      case "inventory":
        return <Inventory tabDatas={HeaderTabDatas["inventory"]} />;
      case "animals_detail":
        return (
          <AnimalListDetailTab
            tabDatas={HeaderTabDatas["animals_detail"]}
            currentAniamlTabId={currentAniamlTabId}
          />
        );
      case "friendView":
        return <FriendView tabDatas={HeaderTabDatas["friendView"]} />;
      default:
        return "";
    }
  };
  // 데이터
  const { data, isLoading } = useGetAxios({ url: "/api/game/main" });
  const { data: feedInventory, isLoading: isLoadingFeedInventory } =
    useGetAxios({ url: "/api/game/inventory/feed" });

  // 메인데이터
  useEffect(() => {
    if (!isLoading && data) {
      setMyCharacter(data?.animal);
      setUserData(data?.user);
      setMainCurrencyData(data?.currency);
      setMainCurrencyAlarmData(data?.alarm);
    }
  }, [isLoading, data]);
  // 경험치테이블 데이터

  useEffect(() => {
    if (feedInventory && !isLoadingFeedInventory) {
      setMyFeed(feedInventory.inventories.items);
    }
  }, [feedInventory, isLoadingFeedInventory]);

  useEffect(() => {
    if (searchParams) {
      const tab: any = searchParams.get("tab");
      setHeaderTab({ name: tab });
    }
  }, []);

  return (
    <>
      {!isLoading && !isLoadingFeedInventory ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
}
