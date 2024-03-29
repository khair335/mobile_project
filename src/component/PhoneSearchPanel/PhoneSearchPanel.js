import React from 'react';
import mobile1 from '../../assets/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ONLY_SEARCH_BOX_CLOSE, SEARCH_BOX_CLOSE } from '../../redux/actionTypes/actionTypes';
const PhoneSearchPanel = () => {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();

  return (
    <div className='w-full pb-4 sm:px-0 px-1'>

      <p className='py-2  font-raleway font-medium text-lg'>Search Result</p>
      <div>
        <div className='m-2 sm:pt-0 pt-10 sm:m-5 flex flex-wrap gap-y-6 gap-x-[10px] sm:gap-x-2 items-start'>
          {
  searchData.length > 0 ? <>
    {
      [...searchData].reverse().map((d, i) => (
        <Link
          key={i}
          to={`/${d.brand.toLowerCase()}/${d._id}`}
          onClick={() => dispatch({ type: ONLY_SEARCH_BOX_CLOSE })}
          className='max-w-[105px] sm:max-w-[180px] w-full flex flex-col justify-center items-center cursor-pointer group transition-transform transform-gpu transform-origin-center hover:scale-110'
        >
          <div className='max-w-[135px] w-full'>
            <img className='w-full h-[135px] object-contain' src={d.banner_img} alt="" />
          </div>
          <p className='text-center text-[#777] font-inter text-sm py-4 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1 w-full'>
            {d.deviceName}
          </p>
        </Link>
      ))
    } </>
    : "No Data Found"
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
          <button class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex bg-[#0057FF] text-white">
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
  );
};

export default PhoneSearchPanel;