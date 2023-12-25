export type ChildrenType = React.ReactNode;
export interface ConstantType {
  name?: string;
  image: string;
  title: string;
}
export interface FilterTabType {
  [key: string]: {
    name: string;
    title: string;
  };
}
export interface MyAnimalType {
  acquired_exp: number;
  evolution_status: EvolutionType;
  id: number | null;
  is_growth: boolean;
  level: number;
  name: string;
  next_exp: number;
  percent_exp: number;
  remain_next_level_time: number;
  status: string;
  action: MainActionType[];
}
export interface MainActionType {
  category: string;
  properties: MainActionPropertiesType[];
}
export interface MainActionPropertiesType {
  skin_code: number;
  skin_name: string;
}

export interface userType {
  nickname: string;
  sleep_score: number;
}
export interface feedType {
  id?: number | null;
  experience: number;
  quantity: number;
}
export interface FeedType {
  exp: number;
  grade: number;
  name: string;
  quantity: number;
  item_id: number;
}

export interface AnimalsType {
  id: number | null;
  name: string;
  level: number;
  percent_exp: number;
  is_select: boolean;
  is_pet: boolean;
}
export interface GrowingType {
  [key: string]: string;
}
export type ClickType =
  | React.MouseEvent<HTMLLIElement>
  | React.MouseEvent<HTMLButtonElement>;

export type SubmitType = React.FormEvent<HTMLFormElement>;
export type ChangeType = React.ChangeEvent<HTMLInputElement>;

export interface tabDatasType {
  name?: string;
  des?: string;
}

export interface EnviromentType {
  [key: string]: {
    backgroundImage: string;
    equip: PositionType[];
  };
}

export interface PositionType {
  x: number;
  y: number;
  equipedImage: string;
  name: string;
}

export interface AnimalImageType {
  pending: string;
  sleepy: string;
  sleep: string;
}

export interface ItemType {
  name: string;
  image: string | File;
  id: null | number;
}

export interface TabListType {
  name: string;
  price: number;
  image: string;
  id: null | number;
}
export interface ShopCategories {
  list: { id: number | null; name: string }[];
}
export interface ShopItemList {
  id: number;
  price: number;
  exp: number;
  name: string;
}
export interface FoodItemsType {
  amount: number | null;
  exp: number | null;
  id: number | null;
  item_id: number | null;
  name: string;
}
export interface ShopTabs {
  name: string;
  des: string;
  data: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
export interface LevelStatusType {
  expTimer:
    | "stop" //일반상태
    | "starting"; // 타이머 상태
  levelStatus:
    | "normal"
    | "evolution" //진화가능상태
    | "evolution_complete" //진화완료가능상태
    | "last_evolution" //최종진화가능 상태
    | "last_evolution_complete"; //최종진화완료가능 상태
}
export type EvolutionType = "first" | "second" | "third" | "final";

export interface FoodType {
  name: string;
  img: string;
  quantity: number;
  addExp: number;
}
export type AnimalStatus = {
  [key: string]: AnimalEvolutionImgType;
  wakeup: AnimalEvolutionImgType;
  sleep: AnimalEvolutionImgType;
  sleepy: AnimalEvolutionImgType;
};
export interface AnimalEvolutionImgType {
  [key: string]: {
    [key: string]: string | any;
  };
}
export type emotionListType = {
  id: number;
  name: string;
};
export interface AlarmType {
  id: number;
  message: string;
  change_time: string;
  is_read: boolean;
}
export interface ActionType {
  action: string;
  action_id: number;
  animal: string;
  category_id: number;
  is_equip: boolean;
  is_lock: boolean;
  name: string;
  skin_code: number;
}
export interface EmotionAnimalType {
  name: string;
  id: number;
}
export interface EmotionTabType {
  animal_id: number;
  type: string;
  emotion: string;
}
export interface MarketType {
  category: string;
  property: MarketItemType[];
}
export interface MarketItemType {
  id: number | null;
  name: string;
  price: number;
  exp: number;
}
export interface FriendType {
  friend_avatar: string;
  friend_id: number;
  friend_name: string;
  status: string;
}
export interface MyFriendViewType {
  user: MyFriendUserViewType;
  animal: MyFriendAnimalViewType;
}
export interface MyFriendUserViewType {
  avatar: string;
  id: number;
  nickname: string;
}
export interface MyFriendAnimalViewType {
  id: number;
  level: number;
  name: string;
  status: string;
  evolution_status: string;
  action: MainActionType[];
}
export interface MainAlarmType {
  count: number;
  is_alarm: boolean;
}
export interface MainCurrency {
  point: number;
  crystal: number;
}
