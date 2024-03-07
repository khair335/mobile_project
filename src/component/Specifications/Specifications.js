import React from 'react';

const Specifications = ({ deviceData }) => {
    const formatPropertyName = (name) => {
    return name
      .replace(/_/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase());
  };
  return (

      <div className="w-full">
        {deviceData.map((d, i) => (
          <div
            className={`border-b-4 md:border-b-[6px] border-gray-100 py-[2px] md:py-1 flex items-start gap-2 md:gap-4
                              }`}
            key={i}
          >
            <p className="uppercase text-sky-700 text-sm md:text-lg max-w-[80px] md:max-w-[100px] w-full py-0 md:py-1">
              {formatPropertyName(d.type)}
            </p>
            <div className="flex-col w-full">
              {d.subType.map((s, j) => (
                <div
                  key={j}
                  className={`flex items-start w-full ${j === d.subType.length - 1
                      ? "last-child-no-border"
                      : ""
                    } border-b-[1px] py-[2px] md:py-1`}
                >
                  <p className="max-w-[90px] md:max-w-[150px] w-full capitalize text-xs md:text-base text-gray-500">
                    {formatPropertyName(s.name)}
                  </p>
                  <p className="text-gray-500 text-[10px] md:text-sm">
                    {s.subData}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

  );
};

export default Specifications;