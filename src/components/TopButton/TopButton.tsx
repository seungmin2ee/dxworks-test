import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";

const TopButton = () => {
  const cx = classNames.bind(styles);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={cx("top-btn", isVisible && "show")}
      onClick={scrollToTop}
    >
      <i className="bx bx-chevron-up"></i>
    </button>
  );
};

export default TopButton;
