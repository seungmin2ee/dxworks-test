import classNames from "classnames/bind";
import styles from "./style.module.scss";
import screens01 from "../../assets/images/screens01.png";
import screens02 from "../../assets/images/screens02.png";
import screens03 from "../../assets/images/screens03.png";
import switcher from "../../assets/images/switcher.svg";

const Main = () => {
  const cx = classNames.bind(styles);

  return (
    <main>
      <section className={cx("intro")}>
        <div className={cx("intro-container")}>
          <div className={cx("intro-text")}>
            <h2>Silicon</h2>
            <p>
              Multipurpose Business /&nbsp;
              <br />
              Technology Template
            </p>
            <img src={switcher} alt="테마 토글버튼 이미지" />
            <div className={cx("view-btn")}>
              <span></span>
              <span>View Landings</span>
            </div>
          </div>
          <div className={cx("intro-images")}>
            <img src={screens01} alt="인트로 이미지1" />
            <img src={screens02} alt="인트로 이미지2" />
            <img src={screens03} alt="인트로 이미지3" />
          </div>
        </div>
      </section>
      <section className={cx("cards")}></section>
      <section className={cx("landings")}></section>
      <section className={cx("features")}></section>
    </main>
  );
};

export default Main;
