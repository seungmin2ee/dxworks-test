import classNames from "classnames/bind";
import { FeatureListType } from "../Main/featureLists";
import styles from "./style.module.scss";
import touchIcon from "../../assets/images/touchEnabled.svg";

interface FeatureListProps {
  list: FeatureListType;
}

const FeatureList = ({ list }: FeatureListProps) => {
  const cx = classNames.bind(styles);
  const { icon, title, content } = list;

  return (
    <li className={cx("list")}>
      <span>
        {icon ? (
          <i className={`bx ${icon}`}></i>
        ) : (
          <img src={touchIcon} alt="touch icon" />
        )}
      </span>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
};

export default FeatureList;
