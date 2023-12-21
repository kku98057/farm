import { layerStyle } from "../style";
import { ChildrenType } from "../types";
import { MdOutlineClose } from "react-icons/md";
export default function Popup({
  children,
  text,
  sentence,
  zIndex,
}: {
  children: ChildrenType;
  zIndex?: number;
  text?: string;
  sentence?: string;
}) {
  return (
    <div className={layerStyle.popup} style={{ zIndex: zIndex ? zIndex : "" }}>
      <div className={layerStyle.popup_wrap}>
        <div className={layerStyle.popup_inner}>
          <div className={layerStyle.title}>
            <h4 style={{ marginBottom: 30 }}>
              {text} <span>{sentence}</span>
            </h4>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
