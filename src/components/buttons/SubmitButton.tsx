import { buttonStyle } from "../../style";

export default function SubmitButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button type="submit" className={`${buttonStyle.submitBtn} ${className}`}>
      {text}
    </button>
  );
}
