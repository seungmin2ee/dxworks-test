import "./style.scss";
import { useEffect, useState } from "react";
import { LandingContent, getLandingImage } from "../../api/landingApis";

interface LandingListProps {
  list: LandingContent;
}

const LandingList = ({ list }: LandingListProps) => {
  const { title, url, img } = list;
  const [imgURL, setImgURL] = useState<string>("");

  useEffect(() => {
    getLandingImage(img)
      .then((res) => {
        setImgURL(URL.createObjectURL(res));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <li className="landing-list list-hover">
      <a href={url}>
        <img src={imgURL} alt={title} className="landing-img" />
        <h3 className="lading-title">{title}</h3>
      </a>
    </li>
  );
};

export default LandingList;
