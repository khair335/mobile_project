import React, { useEffect, useState } from 'react';
import mobile1 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg'
import Navbar from '../../component/Navbar/Navbar';
import Advertisement_Width_Full from '../../component/Advertisement_Width_Full/Advertisement_Width_Full';
import { Link, useLocation, useParams } from 'react-router-dom';
import Select from 'react-select';
import Advertisement_height_250 from '../../component/Advertisement_height_250/Advertisement_height_250';
import RangeSlider from "react-range-slider-input";
import banner from '../../assets/samsung-2024-1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import PhoneFind from '../../component/PhoneFind/PhoneFind';
import PhoneSearchPanel from '../../component/PhoneSearchPanel/PhoneSearchPanel';
import axios from 'axios';
import { fetchBrandDevices } from '../../redux/actions/deviceAction';
import Loading from '../../component/Loading/Loading';
import { api } from '../../urlConfig';
import TopDevicesLast10Days from '../../component/TopDevicesLast10Days/TopDevicesLast10Days';
import TopFavDevicesLast10Days from '../../component/TopFavDevicesLast10Days/TopFavDevicesLast10Days';
const Brand = () => {
  const { id } = useParams()

  let location = useLocation()
  const pathname = location.pathname;
  const pathnameParts = pathname.split('/');
  const lastPathname = pathnameParts[pathnameParts.length - 1];
  const topTenMobile = [
    {
      id: 1,
      model: 'Samsung Galaxy S24 Ultra',
      hit: 71588,
    },
    {
      id: 2,
      model: 'Xiaomi Redmi Note 13 Pro',
      hit: 48520,
    },
    {
      id: 3,
      model: 'Samsung Galaxy S24',
      hit: 5740,
    },
    {
      id: 4,
      model: 'Xiaomi Poco X6 Pro',
      hit: 32683,
    },
    {
      id: 5,
      model: 'OnePlus 12',
      hit: 21134,
    },
    {
      id: 6,
      model: 'Realme 12 Pro+',
      hit: 30559,
    },
    {
      id: 7,
      model: 'Xiaomi Redmi Note 13',
      hit: 30198,
    },
    {
      id: 8,
      model: 'Apple iPhone 11',
      hit: 29516,
    },
    {
      id: 9,
      model: 'Samsung Galaxy A54',
      hit: 29023,
    },
    {
      id: 10,
      model: 'Xiaomi Redmi Note 13 Pro+',
      hit: 23023,
    },

  ]
  const topTenMobileFan = [
    {
      id: 1,
      model: 'Samsung Galaxy S23 Ultra',
      fav: 1518,
    },
    {
      id: 2,
      model: 'Samsung Galaxy A54',
      fav: 864,
    },
    {
      id: 3,
      model: 'Apple iPhone 14 Pro Max',
      fav: 864,
    },
    {
      id: 4,
      model: 'Google Pixel 7 Pro',
      fav: 754,
    },
    {
      id: 5,
      model: 'Samsung Galaxy S23',
      fav: 692,
    },
    {
      id: 6,
      model: 'Xiaomi 13 Pro',
      fav: 606,
    },
    {
      id: 7,
      model: 'Samsung Galaxy S24 Ultra',
      fav: 590,
    },
    {
      id: 8,
      model: 'Xiaomi Poco F5',
      fav: 583,
    },
    {
      id: 9,
      model: 'Sony Xperia 1 V',
      fav: 563,
    },
    {
      id: 10,
      model: 'OnePlus 11',
      fav: 517,
    },

  ]

  const state = useSelector((state) => state.search);
  const sortedTopTenMobile = topTenMobile.sort((a, b) => b.hit - a.hit);
  const sortedTopTenMobileFan = topTenMobileFan.sort((a, b) => b.fav - a.fav);
  const [brandData, setBrandData] = useState([]);
  console.log("ssssssssssssss", brandData);
  // const [brandName, setBrandName] = useState('TECNO'); // Set your default brand name here

  useEffect(() => {
    const fetchDevicesByBrand = async () => {
      const apiUrl = `${api}/brandName/${id}`
      try {
        const response = await axios.get(apiUrl);

        setBrandData(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
        // Handle error, e.g., set an error state
      }
    };

    fetchDevicesByBrand();
  }, [id]);

  const { brandDevices, brandLoading } = useSelector((state) => state.device);


  console.log("brandWiseDevicebrandWiseDevice100", brandDevices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrandDevices(id.toLocaleLowerCase()))
  }, [id]);

  //  if (brandLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <Navbar />
      <div className='mt-[48px]'>
        <Advertisement_Width_Full />
        <div className='max-w-[1440px] w-full mx-auto'>
          <div className='flex flex-col md:flex-row gap-3 pt-0 sm:pt-4 px-0 sm:px-3'>
            <div className={`md:hidden  ${state.mobileSearch ? 'block' : 'hidden'}`}>
              <PhoneFind />
            </div>
            <div className='lg:max-w-[428px] max-w-[330px] w-full md:block hidden  '>
              <PhoneFind />


              <Advertisement_height_250 />
              <TopDevicesLast10Days/>
              <Advertisement_height_250 />
               <TopFavDevicesLast10Days/>
            </div>

            {
              state.searchPanel ?
                <PhoneSearchPanel />
                :
                <div className='w-full '>


                  <div className={`max-w-[1000px] w-full md:h-[320px] h-[160px] bg-top bg-no-repeat relative bg-cover ]`} style={{ backgroundImage: `url(${brandData?.brand?.brandBannerImg})` }}>
                    <h2 className='capitalize  md:text-4xl text-base font-inter absolute md:bottom-10 bottom-5 md:left-10 left-5 font-medium bg-slate-500 md:py-4 py-2 px-2 bg-opacity-30 backdrop-blur-sm rounded-md text-white '>
                      <span>{lastPathname}</span> Phone
                    </h2>
                  </div>
                  <div className='h-12 bg-slate-400 w-full bg-[rgba(0,0,0,.2)]'>

                  </div>
                  <div>
                    <div className='m-2 md:pt-0 pt-10 md:m-5 flex flex-wrap gap-y-6 gap-x-1 md:gap-x-2 items-center'>

                      {
                        brandDevices ? (
                          <>
                            {brandDevices.map((d, i) => (
                              <Link to={`/${d.brand.toLowerCase()}/${d._id}`} className='max-w-[110px] md:max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group' key={i}>
                                <div className='md:max-w-[135px] max-w-[100px] w-full '>
                                  <img className='w-full' src={d?.banner_img} alt="" srcset="" />
                                </div>
                                <p className='text-center text-[#777] font-inter md:text-sm text-xs py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1 w-full'>
                                  {d?.deviceName}
                                </p>
                              </Link>
                            ))}
                          </>
                        ) : (
                          <div>
                            <Loading />
                          </div>
                        )
                      }





                    </div>
                  </div>
                  {/* <div>
                  <div class="my-[50px] flex justify-center items-center gap-5">
                    <button>
                      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8335 12.1673L12.8335 18.0007L17.8335 23.834" stroke="#ACB5BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.167 12.1673L16.167 18.0007L21.167 23.834" stroke="#ACB5BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect x="33.74" y="35.74" width="33.48" height="35.48" rx="6.74" transform="rotate(180 33.74 35.74)" stroke="#DDE2E5" stroke-width="0.52"></rect>
                      </svg>
                    </button>
                    <button disabled="">
                      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 23.834L14.5 18.0007L19.5 12.1673" stroke="#ACB5BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect x="33.74" y="35.74" width="33.48" height="35.48" rx="6.74" transform="rotate(180 33.74 35.74)" stroke="#DDE2E5" stroke-width="0.52"></rect>
                      </svg>
                    </button>
                    <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex bg-gray-500 text-white">
                      <p class="text-sm font-light font-inter leading-normal text-white">1</p>
                    </button>
                    <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <p class="text-sm font-light font-inter leading-normal">2</p>
                    </button>
                    <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <p class="text-sm font-light font-inter leading-normal">3</p>
                    </button>
                    <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <p class="text-sm font-light font-inter leading-normal">4</p>
                    </button>
                    <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                      <p class="text-sm font-light font-inter leading-normal">5</p>
                    </button>
                    <button>
                      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 12.166L19.5 17.9993L14.5 23.8327" stroke="#ACB5BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect x="0.26" y="0.26" width="33.48" height="35.48" rx="6.74" stroke="#DDE2E5" stroke-width="0.52"></rect>
                      </svg>
                    </button>
                    <button>
                      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1665 23.8327L21.1665 17.9993L16.1665 12.166" stroke="#ACB5BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12.833 23.8327L17.833 17.9993L12.833 12.166" stroke="#ACB5BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect x="0.26" y="0.26" width="33.48" height="35.48" rx="6.74" stroke="#DDE2E5" stroke-width="0.52"></rect>
                      </svg>
                    </button>
                  </div>
                </div> */}

                </div>
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Brand;