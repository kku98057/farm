export default function CreateTextAnimation({
  className,
  target,
  text,
  auto,
}: {
  className: string;
  text: string;
  target: any;
  auto?: boolean;
}) {
  const div = document.createElement("div");
  div.innerHTML = text;
  div.className = `${className}`;
  target.append(div);
  auto &&
    setTimeout(() => {
      target && target.removeChild(div);
    }, 600);
}
