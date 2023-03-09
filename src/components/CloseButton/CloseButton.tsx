import classNames from "classnames/bind";
import styles from "./style.module.scss";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  const cx = classNames.bind(styles);

  return (
    <button className={cx("close-btn")} onClick={onClick}>
      닫기
      <span></span>
      <span></span>
    </button>
  );
};

export default CloseButton;
