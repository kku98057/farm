import {
  inventory,
  message,
  shop,
  friend,
  giraffe_final,
  sheep_final,
  quokka_final,
  panda_final,
  rion_final,
  cat_final,
  dog_final,
  owl_final,
  parrot_final,
  chicken_final,
  dolphin_final,
  horse_final,
  duck_final,
  rabbit_final,
  seaotter_final,
  tiger_final,
  giraffe_first_base,
  sheep_first_base,
  quokka_first_base,
  panda_first_base,
  tiger_first_base,
  rion_first_base,
  cat_first_base,
  dog_first_base,
  owl_first_base,
  parrot_first_base,
  chicken_first_base,
  dolphin_first_base,
  horse_first_base,
  duck_first_base,
  rabbit_first_base,
  seaotter_first_base,
  giraffe_sleep_final,
  giraffe_act_final,
  sheep_sleep_final,
  sheep_act_final,
  quokka_sleep_final,
  quokka_act_final,
  panda_act_final,
  panda_sleep_final,
  tiger_act_final,
  tiger_sleep_final,
  rion_sleep_final,
  rion_act_final,
  cat_sleep_final,
  cat_act_final,
  dog_sleep_final,
  dog_act_final,
  owl_sleep_final,
  owl_act_final,
  parrot_sleep_final,
  parrot_act_final,
  chicken_sleep_final,
  chicken_act_final,
  dolphin_sleep_final,
  dolphin_act_final,
  horse_sleep_final,
  horse_act_final,
  duck_sleep_final,
  duck_act_final,
  rabbit_sleep_final,
  rabbit_act_final,
  seaotter_sleep_final,
  seaotter_act_final,
} from "../asset";
import { AnimalSkin, AnimalStatus } from "../types";
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
//     activity: "",
//     sleeping: "",
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
    name: "보관함",
  },
  animals_detail: {
    name: "동물 상세보기",
  },
  friendView: {
    name: "친구집",
  },
};

export const AnimalList = {
  기린: giraffe_first_base,
  양: sheep_first_base,
  쿼카: quokka_first_base,
  판다: panda_first_base,
  호랑이: tiger_first_base,
  사자: rion_first_base,
  고양이: cat_first_base,
  강아지: dog_first_base,
  올빼미: owl_first_base,
  앵무새: parrot_first_base,
  닭: chicken_first_base,
  돌고래: dolphin_first_base,
  말: horse_first_base,
  오리: duck_first_base,
  토끼: rabbit_first_base,
  해달: seaotter_first_base,
};

export const AnimalListStatus: { [key: string]: AnimalStatus } = {
  // 기린,사자,판다,양
  기린: {
    wakeup: {
      first: {
        1: giraffe_first_base,
        2: giraffe_first_base,
        3: giraffe_first_base,
        4: giraffe_first_base,
      },
      second: {
        1: giraffe_first_base,
        2: giraffe_first_base,
        3: giraffe_first_base,
        4: giraffe_first_base,
      },
      third: {
        1: giraffe_first_base,
        2: giraffe_first_base,
        3: giraffe_first_base,
        4: giraffe_first_base,
      },
      final: {
        1: giraffe_final,
        2: giraffe_final,
        3: giraffe_final,
        4: giraffe_final,
      },
    },
    sleeping: {
      first: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      second: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      third: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      final: {
        1: giraffe_sleep_final,
        2: giraffe_sleep_final,
        3: giraffe_sleep_final,
        4: giraffe_sleep_final,
      },
    },
    activity: {
      first: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      second: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      third: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      final: {
        1: giraffe_act_final,
        2: giraffe_act_final,
        3: giraffe_act_final,
        4: giraffe_act_final,
      },
    },
  },
  양: {
    wakeup: {
      first: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      second: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      third: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      final: {
        1: sheep_final,
        2: sheep_final,
        3: sheep_final,
        4: sheep_final,
      },
    },
    sleeping: {
      first: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      second: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      third: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      final: {
        1: sheep_sleep_final,
        2: sheep_sleep_final,
        3: sheep_sleep_final,
        4: sheep_sleep_final,
      },
    },
    activity: {
      first: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      second: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      third: {
        1: sheep_first_base,
        2: sheep_first_base,
        3: sheep_first_base,
        4: sheep_first_base,
      },
      final: {
        1: sheep_act_final,
        2: sheep_act_final,
        3: sheep_act_final,
        4: sheep_act_final,
      },
    },
  },
  쿼카: {
    wakeup: {
      first: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      second: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      third: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      final: {
        1: quokka_final,
        2: quokka_final,
        3: quokka_final,
        4: quokka_final,
      },
    },
    sleeping: {
      first: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      second: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      third: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      final: {
        1: quokka_sleep_final,
        2: quokka_sleep_final,
        3: quokka_sleep_final,
        4: quokka_sleep_final,
      },
    },
    activity: {
      first: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      second: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      third: {
        1: quokka_first_base,
        2: quokka_first_base,
        3: quokka_first_base,
        4: quokka_first_base,
      },
      final: {
        1: quokka_act_final,
        2: quokka_act_final,
        3: quokka_act_final,
        4: quokka_act_final,
      },
    },
  },
  판다: {
    wakeup: {
      first: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      second: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      third: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      final: {
        1: panda_final,
        2: panda_final,
        3: panda_final,
        4: panda_final,
      },
    },
    sleeping: {
      first: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      second: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      third: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      final: {
        1: panda_sleep_final,
        2: panda_sleep_final,
        3: panda_sleep_final,
        4: panda_sleep_final,
      },
    },
    activity: {
      first: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      second: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      third: {
        1: panda_first_base,
        2: panda_first_base,
        3: panda_first_base,
        4: panda_first_base,
      },
      final: {
        1: panda_act_final,
        2: panda_act_final,
        3: panda_act_final,
        4: panda_act_final,
      },
    },
  },
  호랑이: {
    wakeup: {
      first: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      second: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      third: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      final: {
        1: tiger_final,
        2: tiger_final,
        3: tiger_final,
        4: tiger_final,
      },
    },
    sleeping: {
      first: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      second: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      third: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      final: {
        1: tiger_sleep_final,
        2: tiger_sleep_final,
        3: tiger_sleep_final,
        4: tiger_sleep_final,
      },
    },
    activity: {
      first: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      second: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      third: {
        1: tiger_first_base,
        2: tiger_first_base,
        3: tiger_first_base,
        4: tiger_first_base,
      },
      final: {
        1: tiger_act_final,
        2: tiger_act_final,
        3: tiger_act_final,
        4: tiger_act_final,
      },
    },
  },
  사자: {
    wakeup: {
      first: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      second: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      third: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      final: {
        1: rion_final,
        2: rion_final,
        3: rion_final,
        4: rion_final,
      },
    },
    sleeping: {
      first: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      second: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      third: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      final: {
        1: rion_sleep_final,
        2: rion_sleep_final,
        3: rion_sleep_final,
        4: rion_sleep_final,
      },
    },
    activity: {
      first: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      second: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      third: {
        1: rion_first_base,
        2: rion_first_base,
        3: rion_first_base,
        4: rion_first_base,
      },
      final: {
        1: rion_act_final,
        2: rion_act_final,
        3: rion_act_final,
        4: rion_act_final,
      },
    },
  },
  고양이: {
    wakeup: {
      first: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      second: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      third: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      final: {
        1: cat_final,
        2: cat_final,
        3: cat_final,
        4: cat_final,
      },
    },
    sleeping: {
      first: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      second: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      third: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      final: {
        1: cat_sleep_final,
        2: cat_sleep_final,
        3: cat_sleep_final,
        4: cat_sleep_final,
      },
    },
    activity: {
      first: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      second: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      third: {
        1: cat_first_base,
        2: cat_first_base,
        3: cat_first_base,
        4: cat_first_base,
      },
      final: {
        1: cat_act_final,
        2: cat_act_final,
        3: cat_act_final,
        4: cat_act_final,
      },
    },
  },
  강아지: {
    wakeup: {
      first: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      second: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      third: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      final: {
        1: dog_final,
        2: dog_final,
        3: dog_final,
        4: dog_final,
      },
    },
    sleeping: {
      first: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      second: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      third: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      final: {
        1: dog_sleep_final,
        2: dog_sleep_final,
        3: dog_sleep_final,
        4: dog_sleep_final,
      },
    },
    activity: {
      first: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      second: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      third: {
        1: dog_first_base,
        2: dog_first_base,
        3: dog_first_base,
        4: dog_first_base,
      },
      final: {
        1: dog_act_final,
        2: dog_act_final,
        3: dog_act_final,
        4: dog_act_final,
      },
    },
  },
  올빼미: {
    wakeup: {
      first: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      second: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      third: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      final: {
        1: owl_final,
        2: owl_final,
        3: owl_final,
        4: owl_final,
      },
    },
    sleeping: {
      first: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      second: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      third: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      final: {
        1: owl_sleep_final,
        2: owl_sleep_final,
        3: owl_sleep_final,
        4: owl_sleep_final,
      },
    },
    activity: {
      first: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      second: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      third: {
        1: owl_first_base,
        2: owl_first_base,
        3: owl_first_base,
        4: owl_first_base,
      },
      final: {
        1: owl_act_final,
        2: owl_act_final,
        3: owl_act_final,
        4: owl_act_final,
      },
    },
  },
  앵무새: {
    wakeup: {
      first: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      second: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      third: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      final: {
        1: parrot_final,
        2: parrot_final,
        3: parrot_final,
        4: parrot_final,
      },
    },
    sleeping: {
      first: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      second: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      third: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      final: {
        1: parrot_sleep_final,
        2: parrot_sleep_final,
        3: parrot_sleep_final,
        4: parrot_sleep_final,
      },
    },
    activity: {
      first: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      second: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      third: {
        1: parrot_first_base,
        2: parrot_first_base,
        3: parrot_first_base,
        4: parrot_first_base,
      },
      final: {
        1: parrot_act_final,
        2: parrot_act_final,
        3: parrot_act_final,
        4: parrot_act_final,
      },
    },
  },
  닭: {
    wakeup: {
      first: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      second: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      third: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      final: {
        1: chicken_final,
        2: chicken_final,
        3: chicken_final,
        4: chicken_final,
      },
    },
    sleeping: {
      first: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      second: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      third: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      final: {
        1: chicken_sleep_final,
        2: chicken_sleep_final,
        3: chicken_sleep_final,
        4: chicken_sleep_final,
      },
    },
    activity: {
      first: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      second: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      third: {
        1: chicken_first_base,
        2: chicken_first_base,
        3: chicken_first_base,
        4: chicken_first_base,
      },
      final: {
        1: chicken_act_final,
        2: chicken_act_final,
        3: chicken_act_final,
        4: chicken_act_final,
      },
    },
  },
  돌고래: {
    wakeup: {
      first: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      second: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      third: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      final: {
        1: dolphin_final,
        2: dolphin_final,
        3: dolphin_final,
        4: dolphin_final,
      },
    },
    sleeping: {
      first: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      second: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      third: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      final: {
        1: dolphin_sleep_final,
        2: dolphin_sleep_final,
        3: dolphin_sleep_final,
        4: dolphin_sleep_final,
      },
    },
    activity: {
      first: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      second: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      third: {
        1: dolphin_first_base,
        2: dolphin_first_base,
        3: dolphin_first_base,
        4: dolphin_first_base,
      },
      final: {
        1: dolphin_act_final,
        2: dolphin_act_final,
        3: dolphin_act_final,
        4: dolphin_act_final,
      },
    },
  },
  말: {
    wakeup: {
      first: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      second: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      third: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      final: {
        1: horse_final,
        2: horse_final,
        3: horse_final,
        4: horse_final,
      },
    },
    sleeping: {
      first: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      second: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      third: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      final: {
        1: horse_sleep_final,
        2: horse_sleep_final,
        3: horse_sleep_final,
        4: horse_sleep_final,
      },
    },
    activity: {
      first: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      second: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      third: {
        1: horse_first_base,
        2: horse_first_base,
        3: horse_first_base,
        4: horse_first_base,
      },
      final: {
        1: horse_act_final,
        2: horse_act_final,
        3: horse_act_final,
        4: horse_act_final,
      },
    },
  },
  오리: {
    wakeup: {
      first: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      second: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      third: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      final: {
        1: duck_final,
        2: duck_final,
        3: duck_final,
        4: duck_final,
      },
    },
    sleeping: {
      first: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      second: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      third: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      final: {
        1: duck_sleep_final,
        2: duck_sleep_final,
        3: duck_sleep_final,
        4: duck_sleep_final,
      },
    },
    activity: {
      first: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      second: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      third: {
        1: duck_first_base,
        2: duck_first_base,
        3: duck_first_base,
        4: duck_first_base,
      },
      final: {
        1: duck_act_final,
        2: duck_act_final,
        3: duck_act_final,
        4: duck_act_final,
      },
    },
  },
  토끼: {
    wakeup: {
      first: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      second: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      third: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      final: {
        1: rabbit_final,
        2: rabbit_final,
        3: rabbit_final,
        4: rabbit_final,
      },
    },
    sleeping: {
      first: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      second: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      third: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      final: {
        1: rabbit_sleep_final,
        2: rabbit_sleep_final,
        3: rabbit_sleep_final,
        4: rabbit_sleep_final,
      },
    },
    activity: {
      first: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      second: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      third: {
        1: rabbit_first_base,
        2: rabbit_first_base,
        3: rabbit_first_base,
        4: rabbit_first_base,
      },
      final: {
        1: rabbit_act_final,
        2: rabbit_act_final,
        3: rabbit_act_final,
        4: rabbit_act_final,
      },
    },
  },
  해달: {
    wakeup: {
      first: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      second: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      third: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      final: {
        1: seaotter_final,
        2: seaotter_final,
        3: seaotter_final,
        4: seaotter_final,
      },
    },
    sleeping: {
      first: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      second: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      third: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      final: {
        1: seaotter_sleep_final,
        2: seaotter_sleep_final,
        3: seaotter_sleep_final,
        4: seaotter_sleep_final,
      },
    },
    activity: {
      first: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      second: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      third: {
        1: seaotter_first_base,
        2: seaotter_first_base,
        3: seaotter_first_base,
        4: seaotter_first_base,
      },
      final: {
        1: seaotter_act_final,
        2: seaotter_act_final,
        3: seaotter_act_final,
        4: seaotter_act_final,
      },
    },
  },
};
export const AnimalSkinModel: { [key: string | number]: AnimalSkin } = {
  기린: {
    기본: {
      1: giraffe_first_base,
      2: giraffe_first_base,
      3: giraffe_first_base,
      4: giraffe_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: giraffe_first_base,
      3: giraffe_first_base,
      4: giraffe_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: giraffe_first_base,
      3: giraffe_first_base,
      4: giraffe_first_base,
    },
  },
  양: {
    기본: {
      1: sheep_first_base,
      2: sheep_first_base,
      3: sheep_first_base,
      4: sheep_first_base,
    },
    활동: {
      1: sheep_first_base,
      2: sheep_first_base,
      3: sheep_first_base,
      4: sheep_first_base,
    },
    수면: {
      1: sheep_first_base,
      2: sheep_first_base,
      3: sheep_first_base,
      4: sheep_first_base,
    },
  },
  쿼카: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  판다: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  호랑이: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  사자: {
    기본: {
      1: rion_first_base,
      2: rion_first_base,
      3: rion_first_base,
      4: rion_first_base,
    },
    활동: {
      1: rion_first_base,
      2: rion_first_base,
      3: rion_first_base,
      4: rion_first_base,
    },
    수면: {
      1: rion_first_base,
      2: rion_first_base,
      3: rion_first_base,
      4: rion_first_base,
    },
  },
  고양이: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  강아지: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  올빼미: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  앵무새: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  닭: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  돌고래: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  말: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  오리: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  토끼: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
  },
  해달: {
    기본: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    활동: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
    },
    수면: {
      1: giraffe_first_base,
      2: cat_first_base,
      3: panda_first_base,
      4: horse_first_base,
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
