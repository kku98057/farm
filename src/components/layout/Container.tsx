import { ChildrenType } from "../../types";
export default function Container({
  children,
  className,
}: {
  children: ChildrenType;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
