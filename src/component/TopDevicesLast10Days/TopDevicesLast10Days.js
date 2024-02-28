import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../urlConfig';

const TopDevicesLast10Days = () => {

    const [topDevices, setTopDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get(`${api}/getTopDevicesLast10Days`);

        // Update the state with the received data
        setTopDevices(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const sortedTopTenMobile = topDevices.sort((a, b) => b.visitorCount - a.visitorCount);
  return (
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
                          <td className='text-black font-normal font-inter text-sm pl-2 py-2'>{index + 1}</td>
                          <td className='text-black font-normal font-inter capitalize text-sm hover:text-red-500 py-2'>
                            <Link className='' to={`/${brand.brand.toLowerCase()}/${brand._id}`}>{brand?.deviceName}</Link>
                          </td>
                          <td className='text-black font-normal font-inter text-sm py-2'>{brand?.visitorCount.toLocaleString()}</td>
                        </tr>
                      ))
                    }


                  </tbody>
                </table>

              </div>
  );
};

export default TopDevicesLast10Days;