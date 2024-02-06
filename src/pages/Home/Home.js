import React, { useState } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Advertisement_Width_Full from '../../component/Advertisement_Width_Full/Advertisement_Width_Full';
import { Link, Outlet } from 'react-router-dom';
import Advertisement_height_250 from '../../component/Advertisement_height_250/Advertisement_height_250';
import Select from 'react-select';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import mobile1 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg'
import PhoneFind from '../../component/PhoneFind/PhoneFind';
const Home = () => {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);
  // const [searchBox, setSearchBox] = useState(false);
  // const [value, setValue] = useState([0, 500000]);
  const [searchPanel, setSearchPanel] = useState(false);
  // const mobileBrand = [
  //   {

  //     name: 'SAMSUNG',
  //     link: '/'
  //   },
  //   {

  //     name: 'APPLE',
  //     link: '/'
  //   },
  //   {

  //     name: 'HUAWEI',
  //     link: '/'
  //   },
  //   {

  //     name: 'NOKIA',
  //     link: '/'
  //   },
  //   {

  //     name: 'SONY',
  //     link: '/'
  //   },
  //   {

  //     name: 'LG',
  //     link: '/'
  //   },
  //   {

  //     name: 'HTC',
  //     link: '/'
  //   },
  //   {

  //     name: 'MOTOROLA',
  //     link: '/'
  //   },
  //   {

  //     name: 'LENOVO',
  //     link: '/'
  //   },
  //   {

  //     name: 'XIAOMI',
  //     link: '/'
  //   },
  //   {

  //     name: 'GOOGLE',
  //     link: '/'
  //   },
  //   {

  //     name: 'HONOR',
  //     link: '/'
  //   },
  //   {

  //     name: 'OPPO',
  //     link: '/'
  //   },
  //   {

  //     name: 'REALME',
  //     link: '/'
  //   },
  //   {

  //     name: 'ONEPLUS',
  //     link: '/'
  //   },
  //   {

  //     name: 'VIVO',
  //     link: '/'
  //   },
  //   {

  //     name: 'MEIZU',
  //     link: '/'
  //   },
  //   {

  //     name: 'BLACKBERRY',
  //     link: '/'
  //   },
  //   {

  //     name: 'ASUS',
  //     link: '/'
  //   },
  //   {

  //     name: 'ALCATEL',
  //     link: '/'
  //   },
  //   {

  //     name: 'ZTE',
  //     link: '/'
  //   },
  //   {

  //     name: 'MICROSOFT',
  //     link: '/'
  //   },
  //   {

  //     name: 'VODAFONE',
  //     link: '/'
  //   },
  //   {

  //     name: 'ENERGIZER',
  //     link: '/'
  //   },
  //   {

  //     name: 'CAT',
  //     link: '/'
  //   },
  //   {

  //     name: 'SHARP',
  //     link: '/'
  //   },
  //   {

  //     name: 'MICROMAX',
  //     link: '/'
  //   },
  //   {

  //     name: 'INFINIX',
  //     link: '/'
  //   },
  //   {

  //     name: 'ULEFONE',
  //     link: '/'
  //   },
  //   {

  //     name: 'TECNO',
  //     link: '/'
  //   },
  //   {

  //     name: 'DOOGEE',
  //     link: '/'
  //   },
  //   {

  //     name: 'BLACKVIEW',
  //     link: '/'
  //   },
  //   {

  //     name: 'CUBOT',
  //     link: '/'
  //   },
  //   {

  //     name: 'OUKITEL',
  //     link: '/'
  //   },
  //   {

  //     name: 'ITEL',
  //     link: '/'
  //   },
  //   {

  //     name: 'TCL',
  //     link: '/'
  //   },
  // ]
  // const mobileBrand2 = [
  //   {
  //     id: 1,
  //     label: 'SAMSUNG',
  //     link: '/'
  //   },
  //   {
  //     id: 2,
  //     label: 'APPLE',
  //     link: '/'
  //   },
  //   {
  //     id: 3,
  //     label: 'HUAWEI',
  //     link: '/'
  //   },
  //   {
  //     id: 4,
  //     label: 'NOKIA',
  //     link: '/'
  //   },
  //   {
  //     id: 5,
  //     label: 'SONY',
  //     link: '/'
  //   },
  // ]
  // const ramData = [
  //   {
  //     id: 1,
  //     label: '512MB',

  //   },
  //   {
  //     id: 2,
  //     label: '1GB',

  //   },
  //   {
  //     id: 3,
  //     label: '2GB',

  //   },
  //   {
  //     id: 4,
  //     label: '3GB',

  //   },
  //   {
  //     id: 5,
  //     label: '4GB',

  //   },
  //   {
  //     id: 6,
  //     label: '6GB',

  //   },
  //   {
  //     id: 7,
  //     label: '4GB',

  //   },
  //   {
  //     id: 8,
  //     label: '8GB',

  //   },
  //   {
  //     id: 9,
  //     label: '12GB',

  //   },
  //   {
  //     id: 10,
  //     label: '16GB',

  //   },
  //   {
  //     id: 11,
  //     label: '24GB',

  //   },
  // ]
  // const storage = [
  //   {
  //     id: 1,
  //     label: '512MB',

  //   },
  //   {
  //     id: 2,
  //     label: '1GB',

  //   },
  //   {
  //     id: 3,
  //     label: '2GB',

  //   },
  //   {
  //     id: 4,
  //     label: '4GB',

  //   },
  //   {
  //     id: 5,
  //     label: '8GB',

  //   },
  //   {
  //     id: 6,
  //     label: '16GB',

  //   },
  //   {
  //     id: 7,
  //     label: '32GB',

  //   },
  //   {
  //     id: 8,
  //     label: '64GB',

  //   },
  //   {
  //     id: 9,
  //     label: '128GB',

  //   },
  //   {
  //     id: 10,
  //     label: '256GB',

  //   },
  //   {
  //     id: 11,
  //     label: '512GB',

  //   },
  //   {
  //     id: 12,
  //     label: '1TB',

  //   },
  // ]


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
  const Official = [
    {
      id: 1,
      label: 'Official',

    },
    {
      id: 2,
      label: 'UnOfficial',

    },
    {
      id: 3,
      label: 'Both',

    },


  ]
  const sortedTopTenMobile = topTenMobile.sort((a, b) => b.hit - a.hit);
  const sortedTopTenMobileFan = topTenMobileFan.sort((a, b) => b.fav - a.fav);
  return (
    <div>
      <Navbar />
      <div className='w-full mt-[48px]'>
        <Advertisement_Width_Full />
        <div className='max-w-[1440px] w-full mx-auto'>
          <div className='flex gap-3 pt-4'>
            <div className='max-w-[428px] w-full  '>
              <PhoneFind />
              <Advertisement_height_250 />
              <div className='my-3 w-full px-5'>
                <h3 className='uppercase text-[#777] font-semibold text-lg h-[35px] relative before:absolute before:h-[35px] before:w-3 before:bg-gray-400 before:left-[-20px] before:top-[-4px]' >Top 10 by daily interest</h3>

                <table className='w-full'>
                  <thead className='bg-[#A4C08D] max-w-[400px] w-full'>
                    <tr>
                      <th>&nbsp;</th>
                      <th className="text-left text-sm font-normal font-['inter'] text-white">Device</th>
                      <th className="text-left text-sm font-normal font-['inter'] text-white">Daily hits</th>

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
                      <th className="text-left text-sm font-normal font-['inter'] text-white">Device</th>
                      <th className="text-left text-sm font-normal font-['inter'] text-white">Favorites</th>

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
              searchPanel ?
                <div className='w-full pb-4'>

                  <p className='py-2 font-raleway font-medium text-lg'>Search Result</p>
                  <div className='m-5 flex flex-wrap gap-y-6 gap-x-2'>

                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                    <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                      <div className='max-w-[135px] w-full '>
                        <img className='w-full' src={mobile1} alt="" srcset="" />
                      </div>
                      <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                        Galaxy S24 Ultra
                      </p>
                    </div>
                  </div>
                  <div>
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
                      <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex bg-[#0057FF] text-white">
                        <p class="text-sm font-light font-['Inter'] leading-normal text-white">1</p>
                      </button>
                      <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <p class="text-sm font-light font-['Inter'] leading-normal">2</p>
                      </button>
                      <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <p class="text-sm font-light font-['Inter'] leading-normal">3</p>
                      </button>
                      <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <p class="text-sm font-light font-['Inter'] leading-normal">4</p>
                      </button>
                      <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                        <p class="text-sm font-light font-['Inter'] leading-normal">5</p>
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
                  </div>
                </div>
                :
                <div className=' w-full '>


                  <div>
                    <div className='mb-10'>
                      <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Latest</p>
                      <div className='m-5 flex flex-wrap gap-y-6 gap-x-2'>

                        <Link to="/brand/samsung/samsung_galaxy_s24_ultra" className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </Link>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>


                      </div>
                    </div>
                    <div className='mb-10'>
                      <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Upcoming</p>
                      <div className='m-5 flex flex-wrap gap-y-6 gap-x-2'>

                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>


                      </div>
                    </div>
                    <div className='mb-10'>
                      <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Under 15k</p>
                      <div className='m-5 flex flex-wrap gap-y-6 gap-x-2'>

                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>
                        <div className='max-w-[185px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                          <div className='max-w-[135px] w-full '>
                            <img className='w-full' src={mobile1} alt="" srcset="" />
                          </div>
                          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                            Galaxy S24 Ultra
                          </p>
                        </div>


                      </div>
                    </div>
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