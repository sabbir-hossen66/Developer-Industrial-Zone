
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import bannerOne from '../../assets/images/banner1.jpg'
import bannerTwo from '../../assets/images/banner2.jpg'
import bannerThree from '../../assets/images/banner3.jpg'

const Banner = () => {
  return (
    <div className='py-8 text-white'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[560px] w-5/6 mx-auto rounded-lg' src={bannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[560px] w-5/6 mx-auto rounded-lg' src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[560px] w-5/6 mx-auto rounded-lg' src={bannerThree} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;