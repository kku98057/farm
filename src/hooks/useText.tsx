import { useState } from "react";
import { ChangeType } from "../types";
export default function useText() {
  const [text, setText] = useState("");
  const handleText = (e: ChangeType) => {
    const { value } = e.target;
    setText(value);
  };

  return { text, handleText };
}
