import React, { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Advertisement_Width_Full from '../../component/Advertisement_Width_Full/Advertisement_Width_Full';
import { Link, Outlet } from 'react-router-dom';
import Advertisement_height_250 from '../../component/Advertisement_height_250/Advertisement_height_250';
import Select from 'react-select';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import mobile1 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg'
import PhoneFind from '../../component/PhoneFind/PhoneFind';
import PhoneSearchPanel from '../../component/PhoneSearchPanel/PhoneSearchPanel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../../redux/actions/deviceAction';
import BudgetDevice from '../../component/BudgetDevice/BudgetDevice';
import TopDevicesLast10Days from '../../component/TopDevicesLast10Days/TopDevicesLast10Days';
import TopFavDevicesLast10Days from '../../component/TopFavDevicesLast10Days/TopFavDevicesLast10Days';
// import { fetchDevices } from '../actions/deviceActions';
const Home = () => {

  const [searchPanel, setSearchPanel] = useState(false);
  const state = useSelector((state) => state.search);
  const availableDevices = useSelector((state) => state.device.availableDevices);
  const comingSoonDevices = useSelector((state) => state.device.comingSoonDevices);

  const rootState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { devices, loading, error } = useSelector((state) => state.device);
  useEffect(() => {
    // Dispatch the fetchDevices action
    dispatch(fetchDevices());
  }, [dispatch]);
  const latestDevices = availableDevices
    .sort((b, a) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(-10);
  return (
    <div>
      <Navbar />
      <div className='w-full mt-[48px]'>
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
                <div className=' w-full '>


                  <div className='px-[6px] sm:px-0'>
                    <div className='mb-10'>
                      <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Latest</p>
                      <div className='m-0 sm:m-5 flex flex-wrap gap-y-6 gap-x-2  sm:gap-x-2 items-start'>


                        {
                          latestDevices.reverse().map((d, i) => (
                            <Link
                              key={i}
                              to={`/${d.brand.toLowerCase()}/${d._id}`}
                              className='max-w-[110px] sm:max-w-[180px] w-full flex flex-col justify-center items-center cursor-pointer group transition-transform transform-gpu transform-origin-center hover:scale-110'
                            >
                              <div className='max-w-[135px] w-full'>
                                <img className='w-full h-[135px] object-contain' src={d.banner_img} alt="" />
                              </div>
                              <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1 w-full capitalize'>
                                {d.deviceName}
                              </p>
                            </Link>

                          ))
                        }




                      </div>
                    </div>
                    <div className='mb-10'>
                      <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Upcoming</p>
                      <div className='m-0 sm:m-5 flex flex-wrap gap-y-6 gap-x-2 sm:gap-x-2'>

                        {
                          comingSoonDevices
                            .sort((a, b) => a.deviceName.localeCompare(b.deviceName))
                            .slice(0, 5)
                            .map((d, i) => (
                              <Link
                                key={i}
                                to={`/${d.brand.toLowerCase()}/${d._id}`}
                                className='max-w-[110px] sm:max-w-[180px] w-full flex flex-col justify-center items-center cursor-pointer group transition-transform transform-gpu transform-origin-center hover:scale-110'
                              >
                                <div className='max-w-[135px] w-full'>
                                  <img className='w-full h-[135px] object-contain' src={d.banner_img} alt="" />
                                </div>
                                <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1 w-full'>
                                  {d.deviceName}
                                </p>
                              </Link>
                            ))
                        }





                      </div>
                    </div>
                    {/* <div className='mb-10'>
                      <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Under 15k</p>
                      <div className='m-0 sm:m-5 flex flex-wrap gap-y-6 gap-x-2 sm:gap-x-2'>

                        <div className='max-w-[110px] sm:max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[110px] sm:max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[110px] sm:max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[110px] sm:max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[110px] sm:max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>


                      </div>
                    </div> */}

                    <BudgetDevice price={10000}/>
                    <BudgetDevice price={20000}/>
                    <BudgetDevice price={300000} priceThreshold={100000} />
                  </div>


                </div>
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;