import { Link } from "react-router-dom";
import { buttonStyle } from "../../style";

export default function LinkButton({
  text,
  to,
  className,
}: {
  text: string;
  to: string;
  className?: string;
}) {
  return (
    <Link className={className ? className : `${buttonStyle.linkBtn}`} to={to}>
      {text}
    </Link>
  );
}
