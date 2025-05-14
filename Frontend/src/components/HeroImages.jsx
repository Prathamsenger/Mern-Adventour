import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroimage2 from "../assets/images/hero_img2.png";
import heroimage3 from "../assets/images/hero_img3.png";
import heroimage4 from "../assets/images/hero_img4.png";
import heroimage5 from "../assets/images/hero_img5.png";
import heroimage6 from "../assets/images/hero_img6.png";

const HeroImages = () => {
  return (
    <div className="my-6">
      <Swiper
        modules={[ Pagination,Navigation,Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-320 h-[500px] rounded-xl"
      >
      
        <SwiperSlide>
          <img src={heroimage4} alt="Hero 4" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroimage2} alt="Hero 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroimage6} alt="Hero 6" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroimage5} alt="Hero 5" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroimage3} alt="Hero 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroImages;