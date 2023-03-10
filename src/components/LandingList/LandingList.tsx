import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { landingImgApi } from "../../api/landingsApi";
import { Content } from "../Main/Main";

interface LandingListProps {
  landing: Content;
}

const LandingList = ({ landing }: LandingListProps) => {
  const cx = classNames.bind(styles);
  const { title, url, img } = landing;
  const [imgURL, setImgURL] = useState<string>("");

  useEffect(() => {
    landingImgApi(img)
      .then((res) => {
        setImgURL(URL.createObjectURL(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <li className={cx("list")}>
      <a href={url}>
        <img src={imgURL} alt={title} />
        <h3>{title}</h3>
      </a>
    </li>
  );
};

export default LandingList;
