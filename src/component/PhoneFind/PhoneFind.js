import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ON_SEARCH, SEARCH_BOX_CLOSE, SEARCH_BOX_OPEN } from '../../redux/actionTypes/actionTypes';
import axios from 'axios';
import { api } from '../../urlConfig';
import { useMutation } from 'react-query';
import { onSearch } from '../../redux/reducers/searchReducer';
const postData = async (requestData) => {
  try {
    const response = await axios.post(`${api}/filterDevices`, requestData);
    return response.data;
  } catch (error) {
    throw new Error('Error posting data');
  }
};
const PhoneFind = () => {
  const dispatch = useDispatch();


  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [value, setValue] = useState([0, 500000]);
  const [searchPanel, setSearchPanel] = useState(false);
  const [mobileBrand, setMobileBrand] = useState([]);
  const [brandOption, setBrandOption] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedBattery, setSelectedBattery] = useState(null);
const mutation = useMutation(
  (requestData) => postData(requestData),
  {
    onSuccess: (data) => {
      dispatch(onSearch(data));
    },
  }
);


  // console.log("mutation", mutation);

const handlePhoneFinder = () => {
  if (mutation.isLoading) {
    // Prevent multiple clicks during loading
    return;
  }

  const requestData = {
    brand: selectedBrand?.label,
    battery: selectedBattery?.label,
    ram: selectedRam?.label,
    storage: selectedStorage?.label.toLowerCase(),
    minPrice: value[0],
    maxPrice: value[1],
  };

  mutation.mutate(requestData);

    // if (mutation.isSuccess) {
    //   dispatch(onSearch(mutation.data))

    // }
};
  useEffect(() => {
    // Fetch data using Axios when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/brandName`);
        // Assuming the response.data is an array of objects with 'name' and 'link' properties
        setMobileBrand(response.data.brandNames);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const mobileBrand2 = [
    {
      id: 1,
      label: 'SAMSUNG',
      link: '/'
    },
    {
      id: 2,
      label: 'APPLE',
      link: '/'
    },
    {
      id: 3,
      label: 'HUAWEI',
      link: '/'
    },
    {
      id: 4,
      label: 'NOKIA',
      link: '/'
    },
    {
      id: 5,
      label: 'SONY',
      link: '/'
    },
  ]
  const ramData = [
    {
      id: 1,
      label: '512',

    },
    {
      id: 2,
      label: '1',

    },
    {
      id: 3,
      label: '2',

    },
    {
      id: 4,
      label: '3',

    },
    {
      id: 5,
      label: '4',

    },
    {
      id: 6,
      label: '6',

    },
    {
      id: 7,
      label: '4',

    },
    {
      id: 8,
      label: '8',

    },
    {
      id: 9,
      label: '12',

    },
    {
      id: 10,
      label: '16',

    },
    {
      id: 11,
      label: '24',

    },
  ]
  const storage = [
    {
      id: 1,
      label: '512',

    },
    {
      id: 2,
      label: '1GB',

    },
    {
      id: 3,
      label: '2GB',

    },
    {
      id: 4,
      label: '4GB',

    },
    {
      id: 5,
      label: '8GB',

    },
    {
      id: 6,
      label: '16GB',

    },
    {
      id: 7,
      label: '32GB',

    },
    {
      id: 8,
      label: '64GB',

    },
    {
      id: 9,
      label: '128GB',

    },
    {
      id: 10,
      label: '256GB',

    },
    {
      id: 11,
      label: '512GB',

    },
    {
      id: 12,
      label: '1TB',

    },
  ]
  const battery = [
    {
      id: 1,
      label: '2000',

    },
    {
      id: 2,
      label: '2500',

    },
    {
      id: 3,
      label: '3000',

    },
    {
      id: 4,
      label: '3500',

    },
    {
      id: 5,
      label: '4000',

    },
    {
      id: 6,
      label: '5000',

    },
    {
      id: 7,
      label: '6000',

    },
    {
      id: 8,
      label: '7000',

    }



  ]

  const state = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/brandName`);

        const formattedData = response.data.brandNames.map((brand) => ({
          label: brand.name,
        }));
        setBrandOption(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className='min-w-[310px]'>
      {
        !state?.searchBox &&

        <div className='w-full'>
          <div onClick={() => dispatch({ type: SEARCH_BOX_OPEN })} className='w-full h-11 bg-gray-300 hover:bg-gray-500 cursor-pointer flex justify-center items-center group transition-all duration-300'>
            <div className='flex justify-center items-center gap-2 '>
              <div>
                <svg className='text-white' version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                  <g>
                    <rect x="16" y="1" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="32" height="62" />
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="28" y1="5" x2="36" y2="5" />
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="16" y1="51" x2="48" y2="51" />
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="16" y1="9" x2="48" y2="9" />
                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" cx="32" cy="57" r="2" />
                  </g>
                  <g>
                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="29" cy="27" r="6" />
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="33" y1="31" x2="41" y2="39" />
                  </g>
                </svg>
              </div>
              <p className='m-0 p-0 text-xl font-semibold uppercase group-hover:text-white'>
                phone finder
              </p>
            </div>
          </div>
          <ul className='bg-slate-100 flex flex-wrap gap-x-5 gap-y-[1px] py-3 sm:px-3 px-5 justify-start mx-auto'>
            {
              mobileBrand.map((brand, index) => (
                <Link
                  key={index} to={`/brand/${brand.name.toLowerCase()}`}
                  className='w-[80px] h-[26px] cursor-pointer flex justify-center items-center bg-transparent hover:bg-gray-500 px-[1px]  uppercase group transition-all duration-300 text-center'>
                  <p className='text-sm text-[#575757] font-semibold group-hover:text-white' >{brand.name}</p>
                </Link>
              ))
            }
          </ul>
        </div>
      }
      {
        state.searchBox &&
        <div className='w-full pb-4'>

          <div className='w-full '>
            <div

              // onClick={() => [setSearchBox(!searchBox), setSearchPanel(false)]}
              onClick={() => dispatch({ type: SEARCH_BOX_CLOSE })}
              className='w-full h-11 bg-gray-300 hover:bg-gray-500 cursor-pointer flex justify-center items-center group transition-all duration-300'>
              <div className='flex justify-center items-center gap-2 '>
                <div>
                  <svg className='group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(0,0,0,1)"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></div>
                <p className='m-0 p-0 text-xl font-semibold uppercase group-hover:text-white'>
                  back
                </p>
              </div>
            </div>
            <p className='py-2 font-raleway font-medium sm:text-lg text-sm  sm:px-0 px-5'>Brands</p>

            <Select
              className="basic-single sm:px-0 px-5"
              classNamePrefix="select"
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color"
              options={brandOption}
              onChange={setSelectedBrand}
            />
          </div>
          <div className='w-full sm:mt-3 mt-1  flex gap-4 justify-between items-center sm:px-0 px-5'>
            <div className='max-w-48 w-full'>
              <p className='py-2 font-raleway font-medium sm:text-lg text-sm'>Ram</p>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                onChange={setSelectedRam}
                options={ramData}
              />
            </div>
            <div className='max-w-48 w-full'>
              <p className='py-2 font-raleway font-medium sm:text-lg text-sm'>Storage</p>
              <Select
                className="basic-single"
                classNamePrefix="select"

                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                onChange={setSelectedStorage}
                options={storage}
              />
            </div>

          </div>
          <div className='w-full sm:mt-3 mt-1  sm:px-0 px-5'>
            <p className='py-2 font-raleway font-medium sm:text-lg text-sm'>Battery</p>
            <Select
              className="basic-single"
              classNamePrefix="select"

              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              onChange={setSelectedBattery}
              options={battery}
            />
          </div>
          <div className='w-full sm:mt-3 mt-1  sm:px-0 px-5'>
            <p className='py-2 font-raleway font-medium sm:text-lg text-sm'>Price Range</p>
            <div className='w-full flex justify-between items-center sm:py-4 py-1'>
              <input className='max-w-[100px] w-full h-9 outline-none border-[1px] px-2 text-center' value={value[0].toLocaleString()} disabled type="text" />
              <input className='max-w-[100px] w-full h-9 outline-none border-[1px] px-2 text-center' value={value[1].toLocaleString()} disabled type="text" />
            </div>

            <div className='w-full pt-4'>
              <RangeSlider value={value} max={500000} onInput={setValue} />
            </div>
          </div>


          <div className='w-full sm:px-0 px-5'>
            <button onClick={() => handlePhoneFinder()} className='w-full h-9 bg-gray-500 text-white text-xl font-raleway font-medium text-center rounded-sm mt-5 hover:border-[1px] hover:bg-transparent hover:text-gray-500 hover:border-gray-500 transition-all duration-300'>
                {mutation.isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default PhoneFind;