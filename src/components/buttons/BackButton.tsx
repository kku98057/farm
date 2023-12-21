import { MdArrowBackIos } from "react-icons/md";
import { buttonStyle, tabStyle } from "../../style";
import { useSetRecoilState } from "recoil";
import { AtomHeaderTab } from "../../store";

export default function BackButton({
  back,
  title,
}: {
  back: string;
  title?: string;
}) {
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);

  return (
    <div className={buttonStyle.backBtn}>
      <MdArrowBackIos
        className={tabStyle.tab_close}
        onClick={() => {
          if (back !== "") {
            setHeaderTab(back);
          } else {
            setHeaderTab("");
          }
        }}
      />
      <span>{title}</span>
    </div>
  );
}
