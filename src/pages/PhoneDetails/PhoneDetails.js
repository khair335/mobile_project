import React, { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Advertisement_Width_Full from '../../component/Advertisement_Width_Full/Advertisement_Width_Full';

import Advertisement_height_250 from '../../component/Advertisement_height_250/Advertisement_height_250';

import "react-range-slider-input/dist/style.css";
import mobile1 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg'
import mobile2 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg'
import mobile3 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-2.jpg'
import mobile4 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-3.jpg'
import mobile5 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-4.jpg'
import PhoneFind from '../../component/PhoneFind/PhoneFind';
import PhoneSearchPanel from '../../component/PhoneSearchPanel/PhoneSearchPanel';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import './PhoneDetails.css'
const PhoneDetails = () => {
  const state = useSelector((state) => state);

  const [shareModal, setShareModal] = useState(false);
  const [tab, setTab] = useState('specifications')


  const devicesData =
  {
    "model": "Samsung Galaxy S24 Ultra",
    "release_date": "2024, January 24",
    "weight": "232g or 233g",
    "thickness": "8.6mm",
    "os_android": "Android 14",
    "os_brand": "One UI 6.1",
    "displaySize": "6.8",
    "displayResolution": "1440 x 3120 pixels",
    "expandable_storage": false,
    "expandable_storage_type": "microSDXC",
    "ram": "12GB",
    "storage": "256GB/512GB/1TB",
    data: [
      {
        type: "Network",
        subType: [
          {
            name: "Technology",
            subData: "GSM / CDMA / HSPA / EVDO / LTE / 5G"
          }

        ]

      },
      {
        type: "LAUNCH",
        subType: [
          {
            name: "Announced",
            subData: "2024, January 08"
          },
          {
            name: "Status",
            subData: "Available. Released 2024, January 12"
          },

        ]

      },
      {
        type: "BODY",
        subType: [
          {
            name: "Dimensions",
            subData: "164.3 x 76.2 x 9.5 mm (6.47 x 3.00 x 0.37 in)"
          },
          {
            name: "Weight",
            subData: "221 g (7.80 oz)"
          },
          {
            name: "Build",
            subData: "Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass) or eco leather back, aluminum frame"
          },
          {
            name: "SIM",
            subData: "Dual SIM (Nano-SIM, dual stand-by)"
          },
          {
            name: "IP Status",
            subData: "IP68 dust/water resistant (up to 1.5m for 30 min)"
          },

        ]

      },
      {
        type: "DISPLAY",
        subType: [
          {
            name: "Type",
            subData: "Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)"
          },
          {
            name: "Size",
            subData: "6.8 inches, 113.5 cm2 (~88.5% screen-to-body ratio)"
          },
          {
            name: "Resolution",
            subData: "1440 x 3120 pixels, 19.5:9 ratio (~505 ppi density)"
          },
          {
            name: "Protection",
            subData: "Corning Gorilla Glass Armor / Always-on display"
          },
          {
            name: "IP Status",
            subData: "IP68 dust/water resistant (up to 1.5m for 30 min)"
          },

        ]

      },
      {
        type: "PLATFORM",
        subType: [
          {
            name: "OS",
            subData: "Android 14, One UI 6.1"
          },
          {
            name: "Chipset",
            subData: "Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm)"
          },
          {
            name: "CPU",
            subData: "8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)"
          },
          {
            name: "GPU",
            subData: "Adreno 750 (1 GHz)"
          },


        ]

      },
      {
        type: "MEMORY",
        subType: [
          {
            name: "Card slot",
            subData: "No"
          },
          {
            name: "Internal",
            subData: "256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM / UFS 4.0"
          },


        ]

      },
      {
        type: "MAIN CAMERA",
        subType: [
          {
            name: "Quad",
            subData: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS`
          },
          {
            name: "",
            subData: "50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom"
          },
          {
            name: "",
            subData: `10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom`
          },
          {
            name: "",
            subData: `12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`
          },
          {
            name: "Features",
            subData: "LED flash, auto-HDR, panorama"
          },
          {
            name: "Video",
            subData: "8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/240fps, 1080p@960fps, HDR10+, stereo sound rec., gyro-EIS"
          },

        ]

      },
      {
        type: "SELFIE CAMERA",
        subType: [
          {
            name: "Single",
            subData: "12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF"
          },
          {
            name: "Features",
            subData: "Dual video call, Auto-HDR, HDR10+"
          },
          {
            name: "Video",
            subData: "4K@30/60fps, 1080p@30fps"
          },



        ]

      },
      {
        type: "SOUND",
        subType: [
          {
            name: "Loudspeaker",
            subData: "Yes, with stereo speakers"
          },
          {
            name: "3.5mm jack",
            subData: "No"
          },
          {
            name: "",
            subData: "32-bit/384kHz audio"
          },
          {
            name: "",
            subData: "Tuned by AKG"
          },

        ]

      },
      {
        type: "COMMS",
        subType: [
          {
            name: "WLAN",
            subData: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direc"
          },
          {
            name: "Bluetooth",
            subData: "5.3, A2DP, LE"
          },
          {
            name: "Positioning",
            subData: "GPS, GLONASS, BDS, GALILEO, QZSS"
          },
          {
            name: "NFC",
            subData: "Yes"
          },
          {
            name: "Radio",
            subData: "No"
          },
          {
            name: "USB",
            subData: "USB Type-C 3.2, DisplayPort 1.2, OTG"
          },

        ]

      },
      {
        type: "FEATURES",
        subType: [
          {
            name: "Sensors",
            subData: "Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer"
          },
          {
            name: "",
            subData: "Samsung DeX, Samsung Wireless DeX (desktop experience support)"
          },
          {
            name: "",
            subData: "Ultra Wideband (UWB) support"
          },


        ]

      },
      {
        type: "BATTERY",
        subType: [
          {
            name: "Type",
            subData: "Li-Ion 5000 mAh, non-removable"
          },
          {
            name: "Charging",
            subData: "45W wired, PD3.0, 65% in 30 min (advertised)"
          },
          {
            name: "",
            subData: "15W wireless (Qi/PMA)"
          },
          {
            name: "",
            subData: "4.5W reverse wireless"
          },


        ]

      },
      {
        type: "MISC",
        subType: [
          {
            name: "Colors",
            subData: "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow, Titanium Blue, Titanium Green, Titanium Orange"
          },
          {
            name: "Models",
            subData: "SM-S928B, SM-S928B/DS, SM-S928U, SM-S928U1, SM-S928W, SM-S928N, SM-S9280, SM-S928E, SM-S928E/DS"
          },
          {
            name: "SAR",
            subData: "1.26 W/kg (head)     0.62 W/kg (body)    "
          },
          {
            name: "SAR EU",
            subData: "1.06 W/kg (head)     1.30 W/kg (body)    "
          },
          {
            name: "SAR EU",
            subData: "1.06 W/kg (head)     1.30 W/kg (body)    "
          },
          {
            name: "Price",
            subData: "$ 1,290.00 / € 1,349.00 / £ 1,249.00 / ₹ 128,999 "
          },



        ]

      },





    ],

  }
  const tabData = [
    {
      tabName: 'specifications',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>,
    },
    {
      tabName: 'options',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path></svg>
      ,
    },
    {
      tabName: 'pictures',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
      ,
    },
    {
      tabName: 'compare',
      icon: <svg viewBox="0 0 0.72 0.72" fill="none">
        <g clip-path="url(#clip0_105_1836)">
          <path d="M0.39 0.12H0.18a0.06 0.06 0 0 0 -0.06 0.06v0.36a0.06 0.06 0 0 0 0.06 0.06h0.21m0.12 -0.48h0.03a0.06 0.06 0 0 1 0.06 0.06v0.03m0 0.3v0.03a0.06 0.06 0 0 1 -0.06 0.06h-0.03m0.09 -0.27v0.06M0.36 0.06v0.6" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.06" />
        </g>
        <defs>
          <clipPath id="clip0_105_1836">
            <path fill="white" height="24" width="24" d="M0 0H0.72V0.72H0V0z" />
          </clipPath>
        </defs>
      </svg>,
    },
    {
      tabName: 'price',
      icon: <svg fill="#fff" viewBox="0 0 0.72 0.72" id="taka-2" data-name="Flat Color" class="icon flat-color">
        <path id="primary" d="M0.54 0.33a0.03 0.03 0 0 0 -0.03 0.03v0.135a0.105 0.105 0 0 1 -0.21 0V0.36h0.06a0.03 0.03 0 0 0 0 -0.06h-0.06V0.18a0.12 0.12 0 0 0 -0.12 -0.12 0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06v0.12H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.135a0.165 0.165 0 0 0 0.33 0V0.36a0.03 0.03 0 0 0 -0.03 -0.03Z" />
      </svg>
      ,
    },
  ]
  const images = [
    {
      image: mobile1
    },
    {
      image: mobile2
    },
    {
      image: mobile3
    },
    {
      image: mobile4
    },
    {
      image: mobile5
    },
  ]

  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
            <div className='xl:max-w-[428px] lg:max-w-[330px] max-w-[330px] w-full md:block hidden  '>
              <PhoneFind />

              <Advertisement_height_250 />
              <div className='my-3 w-full px-5'>
                <h3 className='uppercase text-[#777] font-semibold text-lg h-[35px] relative before:absolute before:h-[35px] before:w-3 before:bg-gray-400 before:left-[-20px] before:top-[-4px]'>
                  Latest Samsung Device</h3>

                <div className='flex flex-wrap gap-y-4 gap-x-2 mt-2'>

                  <div className='max-w-[122px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                    <div className='max-w-[80px] w-full '>
                      <img className='w-full' src={mobile1} alt="" srcset="" />
                    </div>
                    <p className='text-center text-[#777] font-inter text-xs py-2 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                      Galaxy S24 Ultra
                    </p>
                  </div>
                  <div className='max-w-[122px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                    <div className='max-w-[80px] w-full '>
                      <img className='w-full' src={mobile1} alt="" srcset="" />
                    </div>
                    <p className='text-center text-[#777] font-inter text-xs py-2 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                      Galaxy S24 Ultra
                    </p>
                  </div>
                  <div className='max-w-[122px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                    <div className='max-w-[80px] w-full '>
                      <img className='w-full' src={mobile1} alt="" srcset="" />
                    </div>
                    <p className='text-center text-[#777] font-inter text-xs py-2 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                      Galaxy S24 Ultra
                    </p>
                  </div>
                  <div className='max-w-[122px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                    <div className='max-w-[80px] w-full '>
                      <img className='w-full' src={mobile1} alt="" srcset="" />
                    </div>
                    <p className='text-center text-[#777] font-inter text-xs py-2 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                      Galaxy S24 Ultra
                    </p>
                  </div>
                  <div className='max-w-[122px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                    <div className='max-w-[80px] w-full '>
                      <img className='w-full' src={mobile1} alt="" srcset="" />
                    </div>
                    <p className='text-center text-[#777] font-inter text-xs py-2 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                      Galaxy S24 Ultra
                    </p>
                  </div>
                  <div className='max-w-[122px] w-full flex flex-col justify-center items-center cursor-pointer group'>
                    <div className='max-w-[80px] w-full '>
                      <img className='w-full' src={mobile1} alt="" srcset="" />
                    </div>
                    <p className='text-center text-[#777] font-inter text-xs py-2 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                      Galaxy S24 Ultra
                    </p>
                  </div>




                </div>

              </div>
              <Advertisement_height_250 />

            </div>

            {
              state.searchPanel ?
                <PhoneSearchPanel />
                :
                <div className=' w-full '>


                  <div>
                    <div className='w-full  bg-white/30 bg-opacity-40 md:h-[400px] h-[320px] z-10 relative bg-no-repeat  bg-center object-cover ' style={{ backgroundImage: `url(${mobile1})` }}>
                      <div className='md:h-[50px] h-8 w-full bg-black absolute top-0 flex z-[2] justify-between px-3 md:px-6 items-center bg-opacity-50 backdrop-blur-[80px]'>
                        <h3 className='text-white lg:text-3xl md:text-xl text-base font-sans font-inter'>
                          {devicesData.model ? devicesData.model : "No Name Found"}
                        </h3>
                        <div className='flex items-center'>

                          {
                            shareModal && <div className='flex items-center '>
                              <div className='bg-blue-500 md:w-[50px] w-[32px] md:h-[50px] h-[32px] flex justify-center items-center cursor-pointer'>

                                <div className='md:w-[36px] w-5 md:h-[36px] h-5'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>

                                </div>
                              </div>
                              <div className='bg-black md:w-[50px] w-[32px] md:h-[50px] h-[32px] flex justify-center items-center cursor-pointer'>
                                <div className='md:w-[36px] w-5 md:h-[36px] h-5'>


                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg></div>
                              </div>
                              <div className='bg-gray-400 md:w-[50px] w-[32px] md:h-[50px] h-[32px] flex justify-center items-center cursor-pointer'>
                                <div className='md:w-[36px] w-5 md:h-[36px] h-5'>


                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
                                </div>
                              </div>
                            </div>
                          }
                          <div onClick={() => setShareModal(!shareModal)} className='md:w-[36px] w-5 md:h-[36px] h-5 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path></svg>
                          </div>
                        </div>

                      </div>
                      <div className='pt-[40px] md:pt-[60px] pb-[10px] flex md:gap-2 gap-2 md:justify-start justify-center  backdrop-blur-[100px] relative z-[1] h-full'>
                        <div className='md:max-w-[270px] md:min-w-[270px] max-w-[198.5px] w-full cursor-pointer' onClick={() => setTab('pictures')}>
                          <img className='md:max-w-[270px] md:min-w-[270px] max-w-full  md:h-[280px] min-h-[200px] h-[200px] w-full' src={mobile1} alt="" />
                        </div>

                        <div className='md:flex hidden flex-col justify-between h-[85%] w-[95%]'>
                          <div className='flex justify-between  w-[95%] lg:gap-4 gap-1'>
                            <div>
                              <div className='flex items-center gap-2'>
                                <div className='lg:w-[18px] w-3  lg:h-[18px] h-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>
                                </div>
                                <p className='font-poppins  lg:text-sm text-[10px] font-light'>
                                  {
                                    devicesData.release_date ? devicesData.release_date : "No Data Found"
                                  }
                                </p>
                              </div>
                              <div className='flex items-center gap-2 pt-2'>
                                <div className='lg:w-[18px] w-3  lg:h-[18px] h-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>
                                </div>
                                <p className='font-poppins lg:text-sm text-[10px] font-light'>
                                  {devicesData?.weight}, {devicesData?.thickness} thickness
                                </p>
                              </div>
                              <div className='flex items-center gap-2 pt-2'>
                                <div className='lg:w-[18px] w-3  lg:h-[18px] h-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>        </div>
                                <p className='font-poppins lg:text-sm text-[10px] font-light'>
                                  {devicesData.os_android}, {devicesData.os_brand}
                                </p>
                              </div>
                              <div className='flex items-center gap-2 pt-2'>
                                <div className='lg:w-[18px] w-3  lg:h-[18px] h-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M6 18H18V6H6V18ZM14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM8 8H16V16H8V8Z"></path></svg>  </div>
                                <p className='font-poppins lg:text-sm text-[10px] font-light'>
                                  {devicesData?.storage} storage, {devicesData?.expandable_storage ? devicesData.expandable_storage_type : "no card slot"}

                                </p>
                              </div>
                            </div>

                            <div>
                              <div className='flex gap-3'>

                                <div className='lg:w-8 lg:h-8 w-4 h-4'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="rgba(0,0,0,1)"><path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z"></path></svg>  </div>
                                <p className='text-black lg:text-2xl text-sm'>93%</p>
                              </div>
                              <p className='pt-3 lg:text-sm text-[8px] text-center'>2,672,789 HITS</p>
                            </div>
                            <div>
                              <div className='flex gap-3'>

                                <div className='lg:w-8 lg:h-8 w-4 h-4'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                                </div>
                                <p className='text-black lg:text-2xl text-sm'>624</p>
                              </div>
                              <p className='pt-3 uppercase lg:text-sm text-[8px] text-center'>Become a fan</p>
                            </div>
                          </div>
                          <div className='flex justify-between w-[95%] lg:gap-4 gap-2'>
                            <div className='flex-col justify-start items-start'>
                              <div className='lg:max-w-[36px] max-w-5 lg:h-[36px] h-5 w-full ml-[-4px]'>
                                <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" version="1.1" transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)">
                                  <path d="M3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM4 6V18H20V6H4Z" />
                                </svg>

                              </div>

                              <p className='font-poppins lg:text-xl text-sm font-medium'>{devicesData?.displaySize}"</p>
                              <p className='font-poppins  lg:text-sm text-[8px] font-light'>{devicesData?.displayResolution}</p>
                            </div>
                            <div className='flex-col justify-start items-start'>
                              <div className='lg:max-w-[36px] max-w-5 lg:h-[36px] h-5 w-full '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M2 6.00087C2 5.44811 2.45531 5 2.9918 5H21.0082C21.556 5 22 5.44463 22 6.00087V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5554 2 19.9991V6.00087ZM4 7V19H20V7H4ZM14 16C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10C12.3431 10 11 11.3431 11 13C11 14.6569 12.3431 16 14 16ZM14 18C11.2386 18 9 15.7614 9 13C9 10.2386 11.2386 8 14 8C16.7614 8 19 10.2386 19 13C19 15.7614 16.7614 18 14 18ZM4 2H10V4H4V2Z"></path></svg>
                              </div>

                              <p className='font-poppins lg:text-xl text-sm font-medium'>200  <span className='lg:text-sm text-[8px]'>MP</span> </p>
                              <p className='font-poppins  lg:text-sm text-[8px] font-light'>4320p</p>
                            </div>
                            <div>
                              <div className='lg:max-w-[36px] max-w-5 lg:h-[36px] h-5 w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="rgba(0,0,0,1)"><path d="M14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM7 7V11H11V7H7Z"></path></svg>
                              </div>
                              <p className='font-poppins lg:text-xl text-sm font-medium'>12 <span className='lg:text-sm text-[8px]'>GB RAM</span></p>
                              <p className='font-poppins  lg:text-sm text-[8px] font-light'>Snapdragon 8 Gen 3</p>
                            </div>
                            <div>
                              <div className='lg:max-w-[36px] max-w-5 lg:h-[36px] h-5 w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="rgba(0,0,0,1)"><path d="M9 4V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4H18C18.5523 4 19 4.44772 19 5V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V5C5 4.44772 5.44772 4 6 4H9ZM13 12V7L8 14H11V19L16 12H13Z"></path></svg>
                              </div>
                              <p className='font-poppins lg:text-xl text-sm font-medium'>5000 <span className='lg:text-sm text-[8px]'>mAh</span></p>
                              <p className='font-poppins  lg:text-sm text-[8px] font-light'>Li-Ion</p>
                            </div>
                          </div>
                        </div>


                        <div className='max-w-[45%]  w-full block md:hidden'>
                          <Slider {...settings}>

                            <div>
                              <div className='w-full h-[190px] bg-opacity-30 bg-slate-300  px-2 flex flex-col gap-y-1 justify-between'>
                                <div className='flex items-center gap-1'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" version="1.1" transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)">
                                      <path d="M3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM4 6V18H20V6H4Z" />
                                    </svg>

                                  </div>

                                  <div>
                                    <p className='font-poppins text-base font-medium'>{devicesData?.displaySize}"</p>
                                    <p className='font-poppins  text-xs font-light'>{devicesData?.displayResolution}</p>
                                  </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6.00087C2 5.44811 2.45531 5 2.9918 5H21.0082C21.556 5 22 5.44463 22 6.00087V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5554 2 19.9991V6.00087ZM4 7V19H20V7H4ZM14 16C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10C12.3431 10 11 11.3431 11 13C11 14.6569 12.3431 16 14 16ZM14 18C11.2386 18 9 15.7614 9 13C9 10.2386 11.2386 8 14 8C16.7614 8 19 10.2386 19 13C19 15.7614 16.7614 18 14 18ZM4 2H10V4H4V2Z"></path></svg>


                                  </div>

                                  <div>
                                    <p className='font-poppins text-base font-medium'>200MP</p>
                                    <p className='font-poppins  text-xs font-light'>4320p</p>
                                  </div>
                                </div>

                                <div className='flex items-center gap-1'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM7 7V11H11V7H7Z"></path></svg>


                                  </div>

                                  <div>
                                    <p className='font-poppins text-base font-medium'>12 <span className='text-xs'>GB RAM </span> </p>
                                    <p className='font-poppins  text-xs font-light'>Snapdragon 8 Gen 3</p>
                                  </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M9 4V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4H18C18.5523 4 19 4.44772 19 5V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V5C5 4.44772 5.44772 4 6 4H9ZM13 12V7L8 14H11V19L16 12H13Z"></path></svg>


                                  </div>

                                  <div>
                                    <p className='font-poppins text-base font-medium'>5000 <span className='text-xs'>mAh</span></p>
                                    <p className='font-poppins  text-xs font-light'>Li-Ion</p>
                                  </div>
                                </div>

                              </div>
                            </div>
                            <div>
                              <div className='w-full h-[190px] bg-opacity-30 bg-slate-300  px-3 flex flex-col justify-between gap-y-1 py-1'>
                                <div className='flex items-center gap-2'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>


                                  </div>

                                  <div>
                                    <p className='font-poppins text-xs '> {
                                      devicesData.release_date ? devicesData.release_date : "No Data Found"
                                    }</p>

                                  </div>
                                </div>

                                <div className='flex items-center gap-2'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>

                                  </div>

                                  <div>
                                    <p className='font-poppins text-xs'>
                                      {devicesData?.weight}, {devicesData?.thickness} thickness
                                    </p>
                                  </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>


                                  </div>

                                  <div>
                                    <p className='font-poppins text-xs'>
                                      {devicesData.os_android}, {devicesData.os_brand}
                                    </p>
                                  </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                  <div className='max-w-[20px] h-[20px] w-full ml-[-4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18H18V6H6V18ZM14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM8 8H16V16H8V8Z"></path></svg>

                                  </div>

                                  <div>
                                    <p className='font-poppins text-xs'>
                                      {devicesData?.storage} storage, {devicesData?.expandable_storage ? devicesData.expandable_storage_type : "no card slot"}
                                    </p>
                                  </div>
                                </div>



                              </div>
                            </div>
                          </Slider>

                        </div>

                      </div>
                      <div className='absolute bg-slate-500 h-10 w-full bottom-[35px] z-[2] flex justify-around items-center px-5 bg-opacity-10 md:hidden '>
                        <div>
                          <div className='flex gap-3'>

                            <div className='w-5 h-5'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z"></path></svg>
                            </div>
                            <p className='text-black text-sm'>93%</p>
                          </div>
                          <p className='text-xs uppercase'>2,672,789 HITS</p>
                        </div>
                        <div>
                          <div className='flex gap-3'>

                            <div className='w-5 h-5'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                            </div>
                            <p className='text-black text-sm'>624</p>
                          </div>
                          <p className=' uppercase text-xs'>Become a fan</p>
                        </div>
                      </div>
                      <div className='lg:h-[50px] md:h-[40px] h-8 w-full z-[2] bg-gray-400 absolute bottom-0 backdrop-blur-[80px] flex  justify-around items-center bg-opacity-35  shadow'>
                        {
                          tabData.map((data, i) => <div key={i} onClick={() => setTab(data.tabName.toLocaleLowerCase())} className={`flex justify-center items-center gap-1 cursor-pointer group transition-all duration-300 lg:h-[50px] md:h-[40px] h-8 hover:bg-black md:px-2 px-1 ${tab == data.tabName && 'bg-black'}`} >
                            <div className='lg:w-[24px] md:w-[18px] w-[14px] lg:h-[24px] md:h-[18px] h-[14px]'>
                              {
                                data.icon
                              }
                            </div>
                            <p className={`lg:text-lg md:tex text-[9px] text-black font-poppins uppercase group-hover:text-white ${tab == data.tabName && 'text-white'}`}>{data.tabName}</p>
                          </div>)
                        }

                      </div>



                    </div>
                    <div className='py-4 md:px-6 px-1 w-full'>
                      {
                        tab === 'specifications' &&
                        // specifications-tab
                        <div className='w-full' >
                          {
                            devicesData.data.map((d, i) => (
                              <div className={`border-b-4 md:border-b-[8px] border-gray-100 py-1 md:py-2 flex items-start gap-2 md:gap-4 ${i === devicesData.data.length - 1 ? 'last-child-no-border' : ''}`} key={i}>
                                <p className='uppercase text-sky-700 text-sm md:text-lg max-w-[80px] md:max-w-[100px] w-full py-0 md:py-1'>{d.type}</p>
                                <div className='flex-col w-full'>
                                  {
                                    d.subType.map((s, j) => (
                                      <div key={j} className={`flex items-start w-full ${j === d.subType.length - 1 ? 'last-child-no-border' : ''} border-b-[1px] py-[2px] md:py-1`}>
                                        <p className='max-w-[90px] md:max-w-[150px] w-full capitalize text-xs md:text-base text-gray-500'>{s.name}</p>
                                        <p className='text-gray-500 text-[10px] md:text-sm'>{s.subData}</p>
                                      </div>
                                    ))
                                  }
                                </div>
                              </div>
                            ))
                          }



                        </div>
                      }
                      {
                        tab === 'options' && <div>
                          options
                        </div>
                      }
                      {
                        tab === 'pictures' && <div>
                          <div className=''>
                            <p className='relative md:text-2xl text-sm font-light pt-4 pl-2 md:pl-0 after:absolute after:h-[20px] md:after:h-10 after:w-1 after:bg-black after:left-[-4px] md:after:left-[-25px] after:top-[14px] '>Samsung Galaxy S24 Ultra official images</p>
                          </div>
                          <div className='flex flex-col gap-2 md:gap-6 mt-5 px-4 md:px-0'>
                            {
                              images.map((image, i) => <img className='w-full h-[400px] object-contain ' src={image.image} alt="" />)
                            }

                          </div>
                        </div>
                      }
                      {
                        tab === 'compare' && <div>
                          compare
                        </div>
                      }
                      {
                        tab === 'price' && <div>
                          price
                        </div>
                      }
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

export default PhoneDetails;