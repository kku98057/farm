import { atom } from "recoil";
import {
  AlarmType,
  FoodItemsType,
  LevelStatusType,
  EmotionType,
  MyAnimalType,
  userType,
  FeedType,
  FriendType,
} from "./types";
import { cat, dog, horse } from "./asset";

export const AtomHeaderTab = atom<string>({
  key: "AtomHeaderTabKey",
  default: "",
});
export const AtomFooterTab = atom<string>({
  key: "AtomFooterTabKey",
  default: "",
});
export const AtomFeed = atom<FeedType[]>({
  key: "AtomFeedKey",
  default: [],
});

export const AtomMyFeedTime = atom<{ gain_feed: number; use_feed: number }>({
  key: "AtomMyFeedTimeKey",
  default: {
    gain_feed: 0,
    use_feed: 0,
  },
});

export const AtomTimerBoolean = atom({
  key: "AtomTimerBooleanKey",
  default: false,
});

export const AtomEnviroment = atom<string>({
  key: "AtomEnviromentKey",
  default: "forest",
});
export const AtomcustomState = atom<boolean>({
  key: "AtomcustomStateKey",
  default: false,
});

export const AtomMyCharacter = atom<MyAnimalType>({
  key: "animalsKey",
  default: {
    acquired_exp: 0,
    id: null,
    level: 99,
    name: "",
    next_exp: 9999999,
    percent_exp: 0,
    status: "wakeup",
    total_exp: 0,
  },
});
export const AtomAnimalsList = atom({
  key: "AtomAnimalsListKey",
  default: [],
});
export const AtomUser = atom<userType>({
  key: "userKey",
  default: {
    acquired_exp: 0,
    currency: 0,
    id: null,
    level: 1,
    next_exp: 0,
    nickname: "",
    percent_exp: 0,
    total_exp: 0,
  },
});

export const AtomAccount = atom({
  key: "AtomAccountKey",
  default: {
    accountExp: 0,
    level: 1,
  },
});
export const Atomlevel = atom({
  key: "AtomlevelKey",
  default: {
    1: {
      exp: 100,
      evol_time: 3000, //2분
    },
    2: {
      exp: 50,
      evol_time: 5000, //3분
    },
    3: {
      exp: 100,
      evol_time: 1000, //5분
    },
    4: {
      exp: 200,
      evol_time: 1000, //10분
    },
    5: {
      exp: 300,
      evol_time: 5000, //20분
    },
    6: {
      exp: 5000,
      evol_time: 1000,
    },
  },
});
export const AtomAnimalTabCurrentTabAnimal = atom<null | number>({
  key: "AtomAnimalTabCurrentAnimalKey",
  default: null,
});

export const AtomLoading = atom({
  key: "atomLoadingKey",
  default: false,
});

export const AtomMyFarm = atom<any>({
  key: "AtomMyFarm",
  default: null,
});
export const AtomHistory = atom({
  key: "AtomHistoryKey",
  default: false,
});

export const AtomShopDecorationList = atom({
  key: "AtomShopDecorationListKey",
  default: [],
});
export const AtomShopFoodList = atom({
  key: "AtomShopFoodListKey",
  default: [],
});
export const AtomUserNickname = atom({
  key: "AtomUserNicknameKey",
  default: "",
});
export const AtomCurrency = atom({
  key: "AtomCurrencyKey",
  default: 0,
});

export const AtomMyFood = atom<FoodItemsType[]>({
  key: "AtomMyFoodKey",
  default: [],
});

export const AtomMyFoodList = atom({
  key: "AtomMyFoodListKey",
  default: {},
});
export const AtomShopTab = atom({
  key: "AtomShopTabKey",
  default: "",
});

export const AtomPendingFriendList = atom<FriendType[]>({
  key: "AtomPendingFriendListKey",
  default: [],
});
export const AtomRejectFriendList = atom<FriendType[]>({
  key: "AtomRejectFriendListKey",
  default: [],
});
export const AtomApprovalFriendList = atom<FriendType[]>({
  key: "AtomApprovalFriendListKey",
  default: [],
});
export const AtomRecommend = atom<{ name: string; img: string }[]>({
  key: "AtomRecommendKey",
  default: [
    {
      name: "방방이",
      img: cat,
    },
    {
      name: "붕붕이",
      img: cat,
    },
    {
      name: "띨띨이",
      img: cat,
    },
    {
      name: "돌돌이",
      img: cat,
    },
    {
      name: "튼튼이",
      img: cat,
    },
    {
      name: "실실이",
      img: cat,
    },
    {
      name: "퉁퉁이",
      img: horse,
    },
  ],
});

export const AtomLevelStatus = atom<LevelStatusType>({
  key: "AtomLevelStatusKey",
  default: {
    expTimer: "stop",
    levelStatus: "normal",
  },
});

export const AtomAlarmLength = atom({
  key: "alarmLengthKey",
  default: 0,
});
export const AtomAlarmReadLength = atom({
  key: "AtomAlarmReadLengthKey",
  default: 0,
});
export const AtomAlarmList = atom<AlarmType[]>({
  key: "AtomAlarmListKey",
  default: [],
});

export const AtomEmotionList = atom<EmotionType[]>({
  key: "AtomEmotionListKey",
  default: [],
});
export const AtomLevelPopup = atom<{ popup: boolean; text: string }>({
  key: "AtomLevelPopupKey",
  default: {
    popup: false,
    text: "",
  },
});
export const AtomFeedPopup = atom<boolean>({
  key: "AtomFeedPopupKey",
  default: false,
});
export const AtomAccountLevelModel = atom({
  key: "AtomaccountLevelModelKey",
  default: [],
});
