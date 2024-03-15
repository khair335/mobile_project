import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Compare = ({ deviceData, compareDeviceData }) => {
  const formatPropertyName = (name) => {
    return name
      .replace(/_/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const [compareDeviceMapData, setCompareDeviceMapData]= useState();

  useEffect(() => {
    if (compareDeviceData && Array.isArray(compareDeviceData.data)) {
      const mappedData = compareDeviceData.data.map(item => {
        return {
          type: item.type,
          subType: item.subType.map(subItem => {
            return {
              subData: subItem.subData,
              name: subItem.name
            };
          })
        };
      });
      setCompareDeviceMapData(mappedData);
    }
  }, [compareDeviceData]);

  return (
    <div className="w-full relative">
      <div className="w-full">
        {deviceData.map((d, i) => (
          <div
            className={`border-b-4 md:border-b-[6px] border-gray-100 py-[2px] md:py-1 flex items-start gap-[4px] md:gap-4`}
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
                    className={`flex items-start w-full ${j === d.subType.length - 1 ? "last-child-no-border" : ""} border-b-[1px] py-[2px] md:py-1`}
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
              {/* compareDeviceData render */}
              <div className="flex flex-col max-w-[404px] w-full">
                {compareDeviceMapData && compareDeviceMapData[i] && compareDeviceMapData[i].subType.map((s, j) => (
                  <div
                    key={j}
                    className={`flex items-start w-full ${j === compareDeviceMapData[i].subType.length - 1 ? "last-child-no-border" : ""} border-b-[1px] py-[2px] md:py-1`}
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
    </div>
  );
};

export default Compare;
