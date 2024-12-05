import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            effect="fade"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className=' shadow-xl rounded-lg'
        >
            <SwiperSlide>
                <img src="/BannerImages/black-friday.jpg" alt="" style={{ width: "100%", height: "80vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/BannerImages/slider-3-1.jpg" alt="" style={{ width: "100%", height: "80vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/BannerImages/images.jpg" alt="" style={{ width: "100%", height: "80vh" }} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;