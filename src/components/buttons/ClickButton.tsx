import { ClickType } from "../../types";

export default function ClickButton({
  clickHandler,
  text,
  className,
  sub,
}: {
  clickHandler: (e: ClickType) => void;
  text: string;
  sub?: string;
  className?: string;
}) {
  return (
    <button type="button" className={className} onClick={clickHandler}>
      {text}
      <span>{sub}</span>
    </button>
  );
}
