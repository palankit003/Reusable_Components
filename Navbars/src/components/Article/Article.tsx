import Style from "./Article.module.css";
import { useState } from "react";
import { data } from "./data";
const Article = () => {
  const [info, setInfo] = useState(0);
  return (
    <div className={Style.main_container}>
      <div className={Style.main_wrapper}>
        <div className={Style.tab_btns}>
          <p onClick={() => setInfo(0)} data-val={0 == info}>
            Bun.serve
          </p>
          <p onClick={() => setInfo(1)} data-val={1 == info}>
            WebSocket
          </p>
          <p onClick={() => setInfo(2)} data-val={2 == info}>
            bun:sqlite
          </p>
        </div>
        <div className={Style.tab_headers}>
          <p>{data[info].heading}</p>
          <p>{data[info].subHeading}</p>
        </div>
        <div className={Style.tab_content}></div>
        <div className={Style.tab_content_headings}>
          <div>
            <p>{data[info].envs[0].title}</p>
            <p>{data[info].envs[0].version}</p>
          </div>
          <div>
            <p>{data[info].envs[1].title}</p>
            <p>{data[info].envs[1].version}</p>
          </div>
          <div>
            <p>{data[info].envs[2].title}</p>
            <p>{data[info].envs[2].version}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
