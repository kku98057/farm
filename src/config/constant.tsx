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
  stone,
  giraffe_final,
  sheep_final,
  quokka_final,
  panda__final,
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
//     active: "",
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
    sleep: {
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
        1: giraffe_final,
        2: giraffe_final,
        3: giraffe_final,
        4: giraffe_final,
      },
    },
    active: {
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
        1: giraffe_final,
        2: giraffe_final,
        3: giraffe_final,
        4: giraffe_final,
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
        1: panda__final,
        2: panda__final,
        3: panda__final,
        4: panda__final,
      },
    },
    sleep: {
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
        1: cat_final,
        2: chicken_final,
        3: duck_final,
        4: panda__final,
      },
    },
    active: {
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
        1: panda__final,
        2: panda__final,
        3: panda__final,
        4: panda__final,
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
    sleep: {
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
    active: {
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
