import classNames from "classnames/bind";
import styles from "./style.module.scss";
import "../LandingList/style.scss";
import screens01 from "../../assets/images/screens01.png";
import screens02 from "../../assets/images/screens02.png";
import screens03 from "../../assets/images/screens03.png";
import switcher from "../../assets/images/switcher.svg";
import placeholder from "../../assets/images/placeholder.jpg";
import wireframe from "../../assets/images/wireframe.svg";
import Slide from "../Slide/Slide";
import { useEffect, useState } from "react";
import { LandingContent, getLandingData } from "../../api/landingApis";
import LandingList from "../LandingList/LandingList";

const Main = () => {
  const cx = classNames.bind(styles);
  const [landings, setLandings] = useState<LandingContent[]>([]);

  useEffect(() => {
    getLandingData()
      .then((res) => setLandings(res.contents))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className={cx("intro")}>
        <div className={cx("container")}>
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
      <section className={cx("cards")}>
        <div className={cx("container")}>
          <Slide />
        </div>
      </section>
      <section className={cx("landings")}>
        <div className={cx("container")}>
          <h2>Landing Pages</h2>
          <p>Choose from pre-built layouts of our unique landing pages</p>
          <ul>
            {landings.map((el, idx) => (
              <LandingList key={idx} landing={el} />
            ))}
            <li className="landing-list cursor-wait">
              <div className="comingsoon-img">
                <img
                  src={placeholder}
                  alt="Coming Soon"
                  className="landing-img"
                />
                <span className="wireframe-img">
                  <img src={wireframe} alt="wireframe" />
                </span>
              </div>
              <h3 className="lading-title">Coming Soon</h3>
            </li>
          </ul>
        </div>
      </section>
      <section className={cx("features")}></section>
    </main>
  );
};

export default Main;
