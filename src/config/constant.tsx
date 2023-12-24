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
    name: "보관함",
    title: "inventory",
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
  },

  inventory: {
    name: " 보관함",
  },
  animals_detail: {
    name: "동물 상세보기",
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
  참새: tiger,
};

export const AnimalListStatus: { [key: string]: AnimalStatus } = {
  // 기린,사자,판다,양
  기린: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  양: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  쿼카: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  판다: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  호랑이: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  사자: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  고양이: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  강아지: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  올빼미: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  앵무새: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  닭: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  돌고래: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  말: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  오리: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  토끼: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  해달: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
  },
  참새: {
    wakeup: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleep: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
    sleepy: {
      first: tiger,
      second: cat,
      third: dog,
      final: sheep,
    },
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
