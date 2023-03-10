import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import card1 from "../../assets/images/LightDarkMode.svg";
import card2 from "../../assets/images/FigmaFilesInclude.svg";
import card3 from "../../assets/images/50plusUIFlexibleComponents.svg";
import card4 from "../../assets/images/FreeLifetimeUpdates.svg";

const Slide = () => {
  const cx = classNames.bind(styles);

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination]}
      className="cards-slide"
    >
      <SwiperSlide>
        <div className={cx("card")}>
          <img src={card1} alt="카드 이미지1" />
          <b>Light / Dark Mode</b>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cx("card")}>
          <img src={card2} alt="카드 이미지2" />
          <b>Figma Files Included</b>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cx("card")}>
          <img src={card3} alt="카드 이미지3" />
          <b>50+ UI Flexible Components</b>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cx("card")}>
          <img src={card4} alt="카드 이미지4" />
          <b>Free Lifetime Updates</b>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
