
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import bannerOne from '../../assets/images/banner1.jpg'
import bannerTwo from '../../assets/images/banner2.jpg'
import bannerThree from '../../assets/images/banner3.jpg'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);


  return (
    <div data-aos="zoom-in" className='py-8 text-white'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className='h-[560px] w-5/6 mx-auto rounded-lg ' src={bannerOne} alt="" />
          <div className="absolute inset-0 flex items-center gap-4 justify-center">
            <button className="bg-indigo-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl">
              EXPLORING OUR INDUSTRIES
            </button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='h-[560px] w-5/6 mx-auto rounded-lg' src={bannerTwo} alt="" />
          <div className="absolute inset-0 flex items-center gap-4 justify-center">
            <button className="bg-indigo-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl">
              EXPLORING OUR INDUSTRIES
            </button>

          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='h-[560px] w-5/6 mx-auto rounded-lg' src={bannerThree} alt="" />
          <div className="absolute inset-0 flex items-center gap-4 justify-center">
            <button className="bg-indigo-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl">
              EXPLORING OUR INDUSTRIES
            </button>

          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;