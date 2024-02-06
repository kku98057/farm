import { atom } from "recoil";
import {
  AlarmType,
  FoodItemsType,
  LevelStatusType,
  ActionType,
  MyAnimalType,
  userType,
  FeedType,
  FriendType,
  MainAlarmType,
  MainCurrency,
} from "./types";

export const AtomHeaderTab = atom<{
  name: string;
  params?: null | { [key: string]: string | number };
}>({
  key: "AtomHeaderTabKey",
  default: {
    name: "",
    params: null,
  },
});
export const AtomFooterTab = atom<string>({
  key: "AtomFooterTabKey",
  default: "",
});
export const AtomFeed = atom<FeedType[]>({
  key: "AtomFeedKey",
  default: [],
});
export const AtomAlarm = atom<MainAlarmType>({
  key: "AtomAlarmKey",
  default: {
    count: 0,
    is_alarm: false,
  },
});
export const AtomCurrency = atom<MainCurrency>({
  key: "AtomCurrencyKey",
  default: {
    point: 0,
    crystal: 0,
  },
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
    evolution_status: "first",
    id: null,
    is_growth: false,
    level: 999,
    name: "기린",
    next_exp: 99999,
    percent_exp: 0,
    remain_next_level_time: 0,
    status: "wakeup",
    action: [],
  },
});
export const AtomAnimalsList = atom({
  key: "AtomAnimalsListKey",
  default: [],
});
export const AtomUser = atom<userType>({
  key: "userKey",
  default: {
    nickname: "",
    sleep_score: 0,
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

export const AtomEmotionList = atom<ActionType[]>({
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
