import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Compare = ({ deviceData }) => {
  const formatPropertyName = (name) => {
    return name
      .replace(/_/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase());
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);
  const { devices } = useSelector((state) => state.device);
  const [searchTerm, setSearchTerm] = useState("");
  const [compareDeviceData, setCompareDeviceData] = useState("");
  console.log("compareDeviceData",compareDeviceData);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // dispatch(onSearch(event.target.value));
  };
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    // Update filtered devices when searchTerm changes
    setFilteredDevices(
      devices.filter(
        (device) =>
          device.deviceName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          searchTerm.length >= 3
      )
    );
  }, [searchTerm, devices]);

 const handleCompareDevice = async (deviceId) => {
  try {
    const response = await axios.get(`http://localhost:2000/api/devicesData/${deviceId}`);
    setCompareDeviceData( response.data);

    // Handle the deviceData as needed, you can log it for now
    // console.log('Device Data:', deviceData.data);
  } catch (error) {
    console.error('Error fetching device data:', error);
    // Handle the error state if needed
  }
};
  return (
    <div className="w-full relative">
      <div className='flex justify-between items-center'>
        <div>Current Devices</div>
        <div className='flex flex-col items-end '>
          <label htmlFor="compare">Search Your Compare Devices</label>
          <input type="text" id='compare' className='max-w-[260px] h-11 w-full border outline-none rounded-sm px-2' onChange={handleSearchChange} placeholder='' />
        </div>
      </div>
      <div className="w-full">
        {deviceData.map((d, i) => (
          <div
            className={`border-b-4 md:border-b-[6px] border-gray-100 py-[2px] md:py-1 flex items-start gap-[4px] md:gap-4
                              }`}
            key={i}
          >
            <p className="uppercase text-sky-700 text-xs md:text-lg min-w-[60px] max-w-[60px] md:max-w-[100px] w-full py-0 md:py-1">
              {formatPropertyName(d.type)}
            </p>
            <div className='w-full flex gap-x-1 items-center'>
              <div className="flex flex-col max-w-[180px] sm:max-w-[404px] w-full">
                {d.subType.map((s, j) => (
                  <div
                    key={j}
                    className={`flex items-start w-full ${j === d.subType.length - 1
                      ? "last-child-no-border"
                      : ""
                      } border-b-[1px] py-[2px] md:py-1`}
                  >
                    <p className="min-w-[75px] max-w-[90px] md:max-w-[150px] w-full capitalize text-[10px] md:text-base text-gray-500">
                      {formatPropertyName(s.name)}
                    </p>
                    <p className="text-gray-500 text-[8px] md:text-sm min-w-[100px] sm:min-w-[254px] max-w-[100px] sm:max-w-[254px]">
                      {s.subData}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col max-w-[404px] w-full">
                {deviceData?.data?.subType.map((s, j) => (
                  <div
                    key={j}
                    className={`flex items-start w-full ${j === d.subType.length - 1
                      ? "last-child-no-border"
                      : ""
                      } border-b-[1px] py-[2px] md:py-1`}
                  >

                    <p className="text-gray-500 text-[8px] md:text-sm min-w-[100px] sm:min-w-[254px] max-w-[100px] sm:max-w-[254px] min-h-[15px] sm:min-h-[23.98px]">
                      {s.subData}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
      {filteredDevices.length > 0 && (
        <>
          <div className="absolute w-[242px] z-10 top-[68px] right-0 flex flex-col">
            {filteredDevices.slice(0, 1).map((device, i) => (
              <div
                key={i}
                onClick={() => handleCompareDevice(device._id)}
                className="flex justify-start items-center gap-2 bg-slate-500 border-b-[1px] border-t-[1px] py-[1px] px-2 cursor-pointer"
              >
                <div className="max-w-[28px] w-full">
                  <img
                    className="w-full h-[36px] object-contain"
                    src={device.banner_img}
                    alt=""
                  />
                </div>
                <p className="text-white font-inter">{device.deviceName}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Compare;