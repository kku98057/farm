import { useState } from "react";
export default function useToggle(initialValue: string) {
  const [toggle, setToggle] = useState<string>(initialValue);
  const changeToggle = (value: string) => {
    setToggle(value);
  };

  return { toggle, changeToggle };
}
