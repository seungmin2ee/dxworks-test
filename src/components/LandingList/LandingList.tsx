import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { LandingContent, getLandingImage } from "../../api/landingApis";

interface LandingListProps {
  landing: LandingContent;
}

const LandingList = ({ landing }: LandingListProps) => {
  const cx = classNames.bind(styles);
  const { title, url, img } = landing;
  const [imgURL, setImgURL] = useState<string>("");

  useEffect(() => {
    getLandingImage(img)
      .then((res) => {
        setImgURL(URL.createObjectURL(res));
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
