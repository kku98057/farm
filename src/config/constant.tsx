import {
  feed,
  home,
  inventory,
  message,
  shop,
  cat,
  dog,
  horse,
  tiger,
  friend,
  setting,
  emotion,
  foodIcon,
  sheep,
} from "../asset";
import { AnimalStatus } from "../types";
// export const exp = {
//   currentExp: 0,
//   everyExp: 0,
// };
// export const AnimalState = {
//   animal_id: null,
//   name: "default",
//   status: "wakeup",
//   exp: exp,
//   image: {
//     selected: "",
//     sleepy: "",
//     sleep: "",
//     wakeup: "",
//   },
// };

export const HeaderList = [
  {
    name: "알림",
    title: "alarm",
    image: message,
  },
  // {
  //   name: "상점",
  //   title: "shop",
  //   image: shop,
  // },
  // {
  //   name: "동물 보관함",
  //   title: "animals",
  //   image: inventory,
  // },
  // {
  //   name: "먹이 보관함",
  //   title: "feed_inventory",
  //   image: foodIcon,
  // },
  // {
  //   name: "감정 보관함",
  //   title: "emotion_inventory",
  //   image: emotion,
  // },
  // {
  //   name: "감정우물",
  //   title: "well",
  //   image: feed,
  // },

  // {
  //   name: "친구",
  //   title: "friend",
  //   image: friend,
  // },
  // {
  //   name: "설정",
  //   title: "setting",
  //   image: setting,
  // },
];

export const FooterList = [
  // {
  //   name: "메인화면",
  //   title: "home",
  //   image: home,
  // },
  {
    name: "상점",
    title: "shop",
    image: shop,
  },
  {
    name: "동물 보관함",
    title: "animals",
    image: inventory,
  },
  // {
  //   name: "먹이 보관함",
  //   title: "feed_inventory",
  //   image: foodIcon,
  // },
  {
    name: "친구",
    title: "friend",
    image: friend,
  },
  // {
  //   name: "감정 보관함",
  //   title: "emotion_inventory",
  //   image: emotion,
  // },
  // {
  //   name: "감정우물",
  //   title: "well",
  //   image: feed,
  // },
];

export const ShopCategory = {
  rest: {
    name: "",
    des: "",
    data: {
      item1: {
        name: "휴식1",
      },
      item2: { name: "휴식2" },
    },
  },
  food: {
    name: "",
    des: "",
    data: {
      item1: {
        name: "고급 먹이",
      },
      item2: { name: "최고급 먹이" },
    },
  },
  excercise: {
    name: "",
    des: "",
    data: {
      item1: {
        name: "운동1",
      },
      item2: { name: "운동2" },
    },
  },
  etc: {
    name: "",
    des: "",
    data: {
      item1: {
        name: "기타1",
      },
      item2: { name: "기타2" },
    },
  },
};

export const TabDatas = {};
export const HeaderTabDatas = {
  alarm: {
    name: "알람",
  },
  friend: {
    name: "친구",
  },
  addFriend: {
    name: "친구추가",
  },
  setting: {
    name: "세팅",
  },
  shop: {
    name: "스르륵팜 스토어",
    des: "다양한 행동표현을 획득해보세요.",
    notice: [
      "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
      "계절 상품은 조기 종료 될 수 있습니다.",
    ],
  },
  emotion_inventory: {
    name: "스르륵팜 감정 보관함",
    des: "더 많은 활동을 통해 해금해보세요!",
    notice: [],
  },
  feed_inventory: {
    name: "스르륵팜 먹이 보관함",
    des: "다른 종류의 먹이를 먹여보세요.!",
    notice: [],
  },
  animals: {
    name: "스르륵팜 동물 보관함",
    des: "다양한 동물캐릭터를 획득해보세요!",
    notice: [
      "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
      "계절 상품은 조기 종료 될 수 있습니다.",
    ],
  },
  animals_detail: {
    name: "동물 상세보기",
    des: "다양한 동물캐릭터를 획득해보세요!",
  },
  feed: {
    name: "미션",
    notice: [
      "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
      "계절 상품은 조기 종료 될 수 있습니다.",
    ],
  },
  history: {
    name: "히스토리",
    notice: [
      "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
      "계절 상품은 조기 종료 될 수 있습니다.",
    ],
  },
  well: {
    name: "스르륵팜 감정우물",
    des: "감정우물로 현재의 감정을 기록하세요.",
    notice: [
      "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
      "계절 상품은 조기 종료 될 수 있습니다.",
    ],
  },
};

export const AnimalList = {
  기린: tiger,
  양: tiger,
  쿼카: tiger,
  판다: tiger,
  호랑이: tiger,
  사자: tiger,
  고양이: tiger,
  강아지: tiger,
  올빼미: tiger,
  앵무새: tiger,
  닭: tiger,
  돌고래: tiger,
  말: tiger,
  오리: tiger,
  토끼: tiger,
  해달: tiger,
};

export const AnimalListStatus: { [key: string]: AnimalStatus } = {
  // 기린,사자,판다,양
  기린: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  양: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  쿼카: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  판다: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  호랑이: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  사자: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  고양이: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  강아지: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  올빼미: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  앵무새: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  닭: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  돌고래: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  말: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  오리: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  토끼: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
  해달: {
    wakeup: sheep,
    sleep: sheep,
    sleepy: sheep,
  },
};

export const accountLevelModel = {
  level1: {
    nextExp: 19,
    time: 0,
    currency: 100,
  },
  level2: {
    nextExp: 50,
    time: 0,
    currency: 300,
  },
  level3: {
    nextExp: 100,
    time: 0,
    currency: 500,
  },
  level4: {
    nextExp: 200,
    time: 0,
    currency: 1000,
  },
  level5: {
    nextExp: 500,
    time: 3000,
    currency: 2000,
  },
  level6: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level7: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level8: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level9: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level10: {
    nextExp: 1200,
    time: 3000,
    currency: 3000,
  },
  level11: {
    nextExp: 300,
    time: 0,
    currency: 2000,
  },
  level12: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level13: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level14: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level15: {
    nextExp: 500,
    time: 3000,
    currency: 3000,
  },
  level16: {
    nextExp: 1200,
    time: 0,
    currency: 3000,
  },
  level17: {
    nextExp: 300,
    time: 0,
    currency: 2000,
  },
  level18: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level19: {
    nextExp: 500,
    time: 0,
    currency: 3000,
  },
  level20: {
    nextExp: 500,
    time: 3000,
    currency: 3000,
  },
};
