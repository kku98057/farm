import { tabStyle } from "../../../style";

export default function AnimalsName({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  const engName = (name: string) => {
    switch (name) {
      case "고양이":
        return <h4>Cat</h4>;
      case "강아지":
        return <h4>Dog</h4>;
      case "말":
        return <h4>Horse</h4>;
      case "호랑이":
        return <h4>Tiger</h4>;
    }
  };
  return (
    <div className={tabStyle.animals_tab_names}>
      <h4>
        {name} <span>(lv{level ? level : 1})</span>
      </h4>
    </div>
  );
}
