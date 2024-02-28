import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../urlConfig';

const TopFavDevicesLast10Days = () => {
      const [topTenMobileFav, setTopTenMobileFav] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get(`${api}/getTopDevicesByFavLast10Days`);

        // Update the state with the received data
        setTopTenMobileFav(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  return (
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
                      topTenMobileFav.map((brand, index) => (
                        <tr key={index}>
                          <td className='text-black font-normal font-inter text-sm pl-2 py-2'>{index + 1}</td>
                          <td className='text-black font-normal font-inter capitalize text-sm hover:text-red-500 py-2 cursor-pointer'>
                            <Link className='' to={`/${brand.brand.toLowerCase()}/${brand._id}`} >{brand?.deviceName}</Link>
                          </td>
                          <td className='text-black font-normal font-inter text-sm py-2'>{brand?.favCount.toLocaleString()}</td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>

              </div>
  );
};

export default TopFavDevicesLast10Days;