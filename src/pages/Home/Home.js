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
// import { fetchDevices } from '../actions/deviceActions';
const Home = () => {

  const [searchPanel, setSearchPanel] = useState(false);
  const state = useSelector((state) => state.search);
  const availableDevices = useSelector((state) => state.device.availableDevices);
  const comingSoonDevices = useSelector((state) => state.device.comingSoonDevices);
  console.log("comingSoonDevices", comingSoonDevices);
  const rootState = useSelector((state) => state);
  console.log("statessssss", rootState);
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

  const sortedTopTenMobile = topTenMobile.sort((a, b) => b.hit - a.hit);
  const sortedTopTenMobileFan = topTenMobileFan.sort((a, b) => b.fav - a.fav);

  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // useSelector hook to access the Redux store state
  const { devices, loading, error } = useSelector((state) => state.device);
  console.log("devices-----------", devices);
  // useEffect hook to fetch devices on component mount
  useEffect(() => {
    // Dispatch the fetchDevices action
    dispatch(fetchDevices());
  }, [dispatch]);
  const latestDevices = availableDevices
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(-5);
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
              <div className='my-3 w-full px-5'>
                <h3 className='uppercase text-[#777] font-semibold text-lg h-[35px] relative before:absolute before:h-[35px] before:w-3 before:bg-gray-400 before:left-[-20px] before:top-[-4px]' >Top 10 by daily interest</h3>

                <table className='w-full'>
                  <thead className='bg-[#A4C08D] max-w-[400px] w-full'>
                    <tr>
                      <th>&nbsp;</th>
                      <th className="text-left text-sm font-normal font-inter text-white">Device</th>
                      <th className="text-left text-sm font-normal font-inter text-white">Daily hits</th>

                    </tr>
                  </thead>

                  <tbody>

                    {
                      sortedTopTenMobile.map((brand, index) => (
                        <tr key={index}>
                          <td className='text-black font-normal font-["inter"] text-sm pl-2 py-2'>{index + 1}</td>
                          <td className='text-black font-normal font-["inter"] text-sm hover:text-red-500 py-2'>
                            <Link className='' to="/">{brand?.model}</Link>
                          </td>
                          <td className='text-black font-normal font-["inter"] text-sm py-2'>{brand?.hit.toLocaleString()}</td>
                        </tr>
                      ))
                    }


                  </tbody>
                </table>

              </div>
              <Advertisement_height_250 />
              <div className='my-3 w-full px-5'>
                <h3 className='uppercase text-[#777] font-semibold text-lg h-[35px] relative before:absolute before:h-[35px] before:w-3 before:bg-gray-400 before:left-[-20px] before:top-[-4px]' >TOP 10 BY FANS</h3>

                <table className='w-full'>
                  <thead className='bg-gray-500 max-w-[400px] w-full'>
                    <tr>
                      <th>&nbsp;</th>
                      <th className="text-left text-sm font-normal font-inter text-white">Device</th>
                      <th className="text-left text-sm font-normal font-inter text-white">Favorites</th>

                    </tr>
                  </thead>

                  <tbody>
                    {
                      sortedTopTenMobileFan.map((brand, index) => (
                        <tr key={index}>
                          <td className='text-black font-normal font-["inter"] text-sm pl-2 py-2'>{index + 1}</td>
                          <td className='text-black font-normal font-["inter"] text-sm hover:text-red-500 py-2 cursor-pointer'>
                            <Link className='' to="/">{brand?.model}</Link>
                          </td>
                          <td className='text-black font-normal font-["inter"] text-sm py-2'>{brand?.fav.toLocaleString()}</td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>

              </div>
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
                          latestDevices.map((d, i) => (
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