import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { api } from '../../urlConfig';

const Advertisement_Width_Full = () => {
  const [adData, setAdData] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${api}/get-ads/topAds`);
        setAdData(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, []);

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-full'>
      {adData && adData.bannerOption === 'slider' && adData.bannerItem && adData.bannerItem.length > 0 && (
        <Slider {...settings} className='max-w-[1440px]   mx-auto flex justify-center items-center'>
          {adData.bannerItem.map((ad, i) => (
            <div key={i}>
              <img className='w-full object-contain cursor-pointer' src={ad} alt="" srcset="" />
            </div>
          ))}
        </Slider>
      )}
      {adData && adData.bannerOption === 'photo' && adData.bannerItem &&  (
        <div  className='max-w-[1440px]   mx-auto flex justify-center items-center'>


              <img className='w-full object-contain cursor-pointer' src={adData.bannerItem[0]} alt="" srcset="" />


        </div>
      )}

      {/* <div className='bg-slate-300 max-w-[1440px] sm:h-32 h-20 mx-auto flex justify-center items-center'>
        Additional content or fallback if needed
      </div> */}
    </div>
  );
};

export default Advertisement_Width_Full;
