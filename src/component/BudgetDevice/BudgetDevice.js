import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api } from "../../urlConfig";

const BudgetDevice = ({ price }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = `${api}/budget/${price}`;

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        setDevices(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className='mb-10'>
    <p className='pb-2 font-inter font-medium text-2xl relative after:absolute after:h-[3px] after:w-5 after:bottom-2 after:bg-black'>Under {price}</p>
    <div className='m-0 sm:m-5 flex flex-wrap gap-y-6 gap-x-2 sm:gap-x-2'>

      {
        devices
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
  );
};

export default BudgetDevice;
