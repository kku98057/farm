import { layerStyle } from "../style";

export default function Notice({
  list,
  title,
}: {
  list: string[];
  title: string;
}) {
  return (
    <div className={layerStyle.notice_wrap}>
      <h5 className={layerStyle.notice_title}>{title}</h5>
      <ul className={layerStyle.notice_ul}>
        {list.map((item, idx) => (
          <li className={layerStyle.notice_list} key={`${item}_${idx}`}>
            ﹒{item}
          </li>
        ))}
      </ul>
    </div>
  );
}
