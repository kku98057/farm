import { cat, introLogo } from "../asset";
import { Container } from "../components";

import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

import SubmitButton from "../components/buttons/SubmitButton";
import { ChangeType, SubmitType } from "../types";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AtomLoading } from "../store";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import CreateNickname from "../components/CreateNickname";
import ClickButton from "../components/buttons/ClickButton";
import { buttonStyle, introStyle } from "../style";
import useUpdate from "../hooks/useUpdate";
import useGetAxios from "../hooks/useGetAxios";
import Popup from "../components/Popup";

export default function Intro() {
  const [isLoading, setIsLoading] = useRecoilState(AtomLoading);
  const [process, setProcess] = useState("start");
  const [selectData, setSelectData] = useState([]);

  return (
    <div className="wrap">
      <main>
        <section>
          <Container className="intro_container">
            {process === "start" && (
              <StartPage setIsLoading={setIsLoading} setProcess={setProcess} />
            )}

            {process === "select" && (
              <SelectCharcter
                setSelectData={setSelectData}
                setIsLoading={setIsLoading}
                setProcess={setProcess}
              />
            )}
            {process === "loading" && <IntroLoading />}
          </Container>
        </section>
      </main>
    </div>
  );
}

const StartPage = ({
  setIsLoading,
  setProcess,
}: {
  setIsLoading: (state: boolean) => void;
  setProcess: (state: string) => void;
}) => {
  const login = (e: SubmitType) => {
    e.preventDefault();
    setIsLoading(true);
    const TOKEN = Cookies.get("sleep_token");
    if (TOKEN && TOKEN !== "undefined") {
      setProcess("nickname");
    } else {
      return axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/user/init`)
        .then((res) => {
          Cookies.set("sleep_token", res.data.authorisation.access_token);
          setProcess("nickname");
        });
    }
  };

  return (
    <form className="intro" onSubmit={login}>
      <div className="intro_logo">
        <img src={introLogo} alt="인트로 이미지" />
      </div>
      <SubmitButton text="게임 시작하기" />
    </form>
  );
};

const SelectCharcter = ({
  setIsLoading,
  setProcess,
  setSelectData,
}: {
  setIsLoading: (state: boolean) => void;
  setProcess: (state: string) => void;
  setSelectData: any;
}) => {
  const [selectProcess, setSelectProcess] = useState(1);
  const { data, isLoading, error } = useGetAxios({
    url: "/api/user/check-signup",
  });
  const [popup, setPopup] = useState(false);

  const navigator = useNavigate();
  useEffect(() => {
    if (error && !isLoading) {
      const axiosError = error as AxiosError;
      axiosError.response?.status === 405 && setProcess("select");
    }
  }, [error, isLoading]);
  useEffect(() => {
    if (!isLoading) {
      data === "" && setProcess("loading");
    }
  }, [data, isLoading]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={introStyle.select}>
      {selectProcess === 1 && (
        <Select1
          setPopup={setPopup}
          setSelectData={setSelectData}
          setSelectProcess={setSelectProcess}
        />
      )}
      {selectProcess === 2 && (
        <Select2
          setPopup={setPopup}
          setSelectData={setSelectData}
          setSelectProcess={setSelectProcess}
        />
      )}
      {selectProcess === 3 && (
        <Select3
          setPopup={setPopup}
          setSelectData={setSelectData}
          setSelectProcess={setSelectProcess}
        />
      )}
      {selectProcess === 4 && (
        <Select4
          setPopup={setPopup}
          setSelectData={setSelectData}
          setSelectProcess={setSelectProcess}
        />
      )}
      {selectProcess === 5 && (
        <SelectResult
          setSelectData={setSelectData}
          setSelectProcess={setSelectProcess}
          setProcess={setProcess}
        />
      )}
      {popup && (
        <Popup sentence="하나를 선택해주세요.">
          <div className="btns">
            <ClickButton
              text="닫기"
              className={buttonStyle.buyBtn}
              clickHandler={() => setPopup(false)}
            />
          </div>
        </Popup>
      )}
    </div>
  );
};

const Select1 = ({
  setSelectProcess,
  setSelectData,
  setPopup,
}: {
  setSelectProcess: (state: number) => void;
  setSelectData: any;
  setPopup: (state: boolean) => void;
}) => {
  const selct1Data = {
    title: "입면 습관 및 불면증상",
    select: [
      {
        id: 0,
        selector: "잠자는 시간이 일정하지 않다.",
      },
      {
        id: 1,
        selector: "자신의 방 또는 침대에서 안 자려고 한다.",
      },
      {
        id: 2,
        selector: "잠이 드는데 30분 이상 걸린다.",
      },
      {
        id: 3,
        selector: " 잠이 들고 난 뒤 두 번 이상 깬다.",
      },
    ],
  };
  const [currentState, setCurrentState] = useState<{
    id: number;
    selector: string;
  }>();
  const handleNextSelect = () => {
    if (!currentState) {
      setPopup(true);
      return;
    }
    setSelectProcess(2);
    setSelectData((prev: any) => [...prev, { ...currentState }]);
  };

  const handleSelect = (e: ChangeType, selector: string) => {
    const { value } = e.target;
    const id = parseInt(value, 10);
    setCurrentState({
      id: id,
      selector: selector,
    });
  };

  return (
    <div className={introStyle.select_wrap}>
      <h3 className={introStyle.select_title}>Q1.{selct1Data.title}</h3>

      <ul className={introStyle.select_ul}>
        {selct1Data.select.map((list, idx) => (
          <li key={list.selector} className={introStyle.select_list}>
            <label htmlFor={list.selector}>
              <input
                type="radio"
                name="select"
                value={list.id}
                id={list.selector}
                onChange={(e) => handleSelect(e, list.selector)}
              />
              <span>{list.selector}</span>
            </label>
          </li>
        ))}
      </ul>

      <ClickButton
        text="다음"
        className={introStyle.introBtn}
        clickHandler={handleNextSelect}
      />
    </div>
  );
};
const Select2 = ({
  setSelectProcess,
  setSelectData,
  setPopup,
}: {
  setSelectProcess: (state: number) => void;
  setSelectData: any;
  setPopup: (state: boolean) => void;
}) => {
  const selct1Data = {
    title: "입면 습관 및 불면증상",
    select: [
      {
        id: 0,
        selector: "잠자는 시간이 일정하지 않다.",
      },
      {
        id: 1,
        selector: "자신의 방 또는 침대에서 안 자려고 한다.",
      },
      {
        id: 2,
        selector: "잠이 드는데 30분 이상 걸린다.",
      },
      {
        id: 3,
        selector: " 잠이 들고 난 뒤 두 번 이상 깬다.",
      },
    ],
  };
  const [currentState, setCurrentState] = useState<{
    id: number;
    selector: string;
  }>();
  const handleNextSelect = () => {
    if (!currentState) {
      setPopup(true);
      return;
    }
    setSelectProcess(3);
    setSelectData((prev: any) => [...prev, { ...currentState }]);
  };

  const handleSelect = (e: ChangeType, selector: string) => {
    const { value } = e.target;
    const id = parseInt(value, 10);
    setCurrentState({
      id: id,
      selector: selector,
    });
  };

  return (
    <div className={introStyle.select_wrap}>
      <h3 className={introStyle.select_title}>Q2.{selct1Data.title}</h3>

      <ul className={introStyle.select_ul}>
        {selct1Data.select.map((list, idx) => (
          <li key={list.selector} className={introStyle.select_list}>
            <label htmlFor={list.selector}>
              <input
                type="radio"
                name="select"
                value={list.id}
                id={list.selector}
                onChange={(e) => handleSelect(e, list.selector)}
              />
              <span>{list.selector}</span>
            </label>
          </li>
        ))}
      </ul>

      <ClickButton
        text="다음"
        className={introStyle.introBtn}
        clickHandler={handleNextSelect}
      />
    </div>
  );
};
const Select3 = ({
  setSelectProcess,
  setSelectData,
  setPopup,
}: {
  setSelectProcess: (state: number) => void;
  setSelectData: any;
  setPopup: (state: boolean) => void;
}) => {
  const selct1Data = {
    title: "입면 습관 및 불면증상",
    select: [
      {
        id: 0,
        selector: "잠자는 시간이 일정하지 않다.",
      },
      {
        id: 1,
        selector: "자신의 방 또는 침대에서 안 자려고 한다.",
      },
      {
        id: 2,
        selector: "잠이 드는데 30분 이상 걸린다.",
      },
      {
        id: 3,
        selector: " 잠이 들고 난 뒤 두 번 이상 깬다.",
      },
    ],
  };
  const [currentState, setCurrentState] = useState<{
    id: number;
    selector: string;
  }>();
  const handleNextSelect = () => {
    if (!currentState) {
      setPopup(true);
      return;
    }
    setSelectProcess(4);
    setSelectData((prev: any) => [...prev, { ...currentState }]);
  };

  const handleSelect = (e: ChangeType, selector: string) => {
    const { value } = e.target;
    const id = parseInt(value, 10);
    setCurrentState({
      id: id,
      selector: selector,
    });
  };

  return (
    <div className={introStyle.select_wrap}>
      <h3 className={introStyle.select_title}>Q3.{selct1Data.title}</h3>

      <ul className={introStyle.select_ul}>
        {selct1Data.select.map((list, idx) => (
          <li key={list.selector} className={introStyle.select_list}>
            <label htmlFor={list.selector}>
              <input
                type="radio"
                name="select"
                value={list.id}
                id={list.selector}
                onChange={(e) => handleSelect(e, list.selector)}
              />
              <span>{list.selector}</span>
            </label>
          </li>
        ))}
      </ul>

      <ClickButton
        text="다음"
        className={introStyle.introBtn}
        clickHandler={handleNextSelect}
      />
    </div>
  );
};
const Select4 = ({
  setSelectProcess,
  setSelectData,
  setPopup,
}: {
  setSelectProcess: (state: number) => void;
  setSelectData: any;
  setPopup: (state: boolean) => void;
}) => {
  const selct1Data = {
    title: "잠자는 시간이 일정하지 않다.",
    select: [
      {
        id: 0,
        selector: "없음",
      },
      {
        id: 1,
        selector: "거의 없음",
      },
      {
        id: 2,
        selector: "가끔",
      },
      {
        id: 3,
        selector: "자주",
      },
      {
        id: 4,
        selector: "모름",
      },
    ],
  };
  const [currentState, setCurrentState] = useState<{
    id: number;
    selector: string;
  }>();
  const [isLoading, setIsLoading] = useRecoilState(AtomLoading);
  const handleNextSelect = () => {
    if (!currentState) {
      setPopup(true);
      return;
    }
    setIsLoading(true);
    mutate(
      {
        animal_id: 1,
      },

      {
        onSuccess: () => {
          setSelectProcess(5);
          setSelectData((prev: any) => [...prev, { ...currentState }]);
          setIsLoading(false);
        },
      }
    );
  };

  const handleSelect = (e: ChangeType, selector: string) => {
    const { value } = e.target;
    const id = parseInt(value, 10);
    setCurrentState({
      id: id,
      selector: selector,
    });
  };
  const { mutate, isSuccess } = useUpdate({
    url: "/api/animal",
    isAlert: "noAlert",
  });
  const { data } = useGetAxios({ url: "/api/animal/list" });

  return (
    <div className={introStyle.select_wrap}>
      <h3 className={introStyle.select_title}>Q4.{selct1Data.title}</h3>
      <ul className={introStyle.select_ul}>
        {selct1Data.select.map((list, idx) => (
          <li key={list.selector} className={introStyle.select_list}>
            <label htmlFor={list.selector}>
              <input
                type="radio"
                name="select"
                value={list.id}
                id={list.selector}
                onChange={(e) => handleSelect(e, list.selector)}
              />
              <span>{list.selector}</span>
            </label>
          </li>
        ))}
      </ul>
      <ClickButton
        text="다음"
        className={introStyle.introBtn}
        clickHandler={handleNextSelect}
      />
    </div>
  );
};
const SelectResult = ({
  setSelectProcess,
  setSelectData,
  setProcess,
}: {
  setSelectProcess: (state: number) => void;
  setSelectData: any;
  setProcess: (state: string) => void;
}) => {
  const handleNextSelect = () => {
    setProcess("loading");
  };
  return (
    <div className={introStyle.select_wrap}>
      <h3 className={introStyle.select_title}>나에게 잘어울리는 동물은</h3>
      <div className={introStyle.result_img}>
        <img src={cat} alt="" />
      </div>
      <ClickButton
        text="게임 시작하기!"
        className={introStyle.introBtn}
        clickHandler={handleNextSelect}
      />
    </div>
  );
};

const IntroLoading = () => {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/main");
    }, 1000);
  }, []);
  return <Loading />;
};
