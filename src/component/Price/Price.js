import React, { useState } from 'react';
import rio_logo from '../../assets/shop_logo/rio_logo.jpg'
import gng_logo from '../../assets/shop_logo/gng_logo.jpg'
import sumash_tech_logo from '../../assets/shop_logo/sumash_tech_logo.jpg'
import kry_logo from '../../assets/shop_logo/kry_logo.jpg'
import goriber_gadget from '../../assets/shop_logo/goriber_gadget.jpg'
import gadget_park from '../../assets/shop_logo/gadget&park.jpg'
import apple_gadgets from '../../assets/shop_logo/apple_gadgets.png'
import gadget_bodda from '../../assets/shop_logo/gadget_bodda.jpg'
import jack_n_gadget from '../../assets/shop_logo/jack_n_gadget.jpg'
import dazzle from '../../assets/shop_logo/dazzle.png'
const Price = () => {
   const [currentPage, setCurrentPage] = useState(1);
  const shopsPerPage = 5;

  const shopPriceData = [
    {
      id: 1,
      shop_name: 'Rio International',
      shop_logo: rio_logo,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"new"
        },
        {
          id: 2,
          price: 2000000,
          status: 'unofficial',
          variant: '12GB + 256GB',
          condition:"used"
        },
        {
          id: 3,
          price: 3000000,
          status: 'unofficial',
          variant: '24GB + 512GB',
          condition:"new"
        }
      ]
    },
    {
      id: 2,
      shop_name: 'Gadget N Gadget ',
      shop_logo: gng_logo,
      variants: [

        {
          id: 2,
          price: 2000000,
          status: 'unofficial',
          variant: '12GB + 256GB',
          condition:"used"
        },
        {
          id: 3,
          price: 3000000,
          status: 'unofficial',
          variant: '24GB + 512GB',
          condition:"used"
        }
      ]
    },
    {
      id: 3,
      shop_name: 'Sumash Tech',
      shop_logo: sumash_tech_logo,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"used"
        }
      ]
    },
    {
      id: 4,
      shop_name: 'Kry International',
      shop_logo: kry_logo,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"used"
        }
      ]
    },
    {
      id: 5,
      shop_name: 'Goriber Gadget-গরিবের গ্যাজেট',
      shop_logo: goriber_gadget,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB'
          ,condition:"used",
        }
      ]
    },
    {
      id: 6,
      shop_name: 'Gadget & Park',
      shop_logo: gadget_park,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"used"
        }
      ]
    },
    {
      id: 7,
      shop_name: 'Apple Gadgets',
      shop_logo: apple_gadgets,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"used"
        }
      ]
    },
    {
      id: 8,
      shop_name: 'Gadget Bodda- গ্যাজেট বদ্দা',
      shop_logo: gadget_bodda,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"used"
        }
      ]
    },
    {
      id: 9,
      shop_name: 'Jack N Gadget',
      shop_logo: jack_n_gadget,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"new"
        }
      ]
    },
    {
      id: 10,
      shop_name: 'Dazzle',
      shop_logo: dazzle,
      variants: [
        {
          id: 1,
          price: 1000000,
          status: 'official',
          variant: '6GB + 128GB',
          condition:"new"
        }
      ]
    }
   
  ]

  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = shopPriceData.slice(indexOfFirstShop, indexOfLastShop);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(shopPriceData.length / shopsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className='flex flex-col gap-y-6'>
        {
          currentShops.map((data, i) => <div className='flex w-full justify-between items-center'>
            <div className='flex flex-col '>
              <div className='max-w-[60px] w-full h-[60px] rounded-full'>
                <img className='w-full rounded-full' src={data.shop_logo} alt="" srcset="" />
              </div>
              <p className='text-[#777] font-inter text-sm py-1 mt-1 group-hover:bg-gray-500 group-hover:text-white px-1'>
                {data.shop_name}
              </p>
            </div>

            <div className='flex flex-col gap-y-1 w-[50%] justify-end'>
              {
                data.variants.map((d, i) => (
                  <div className='flex gap-1 border-b justify-center items-center py-1 px-2 relative my-1'>

                    <div>
                      <p className='font-inter text-sm'>Variant : {d.variant}</p>
                    </div>
                    <div>|</div>
                    <div>
                      <p className='font-inter text-sm'>Price : {d.price}</p>
                    </div>
                    <p className={`max-w-[75px] cursor-pointer w-full rounded-ss-[6px] rounded-br-[6px] text-white text-center top-[-14px] text-xs flex justify-center items-center left-[-6px]  ${d.status === 'unofficial' ? 'bg-blue-500 ' : 'bg-green-500'} capitalize `}>
                      {
                        d.status
                      }
                    </p>
                    <p className={`max-w-[75px] cursor-pointer w-full rounded-ss-[6px] rounded-br-[6px] text-white text-center top-[-14px] text-xs flex justify-center items-center left-[-6px]  ${d.condition === 'new' ? 'bg-orange-500 ' : 'bg-cyan-600'} capitalize `}>
                      {
                        d.condition
                      }
                    </p>
                  </div>))
              }



            </div>
          </div>)
        }
     {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 rounded-md focus:outline-none bg-gray-300 text-gray-700"
        >
          Previous
        </button>
        {/* {[...Array(Math.ceil(shopPriceData.length / shopsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded-md focus:outline-none ${currentPage === number + 1 ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {number + 1}
          </button>
        ))} */}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(shopPriceData.length / shopsPerPage)}
          className="mx-1 px-3 py-1 rounded-md focus:outline-none bg-gray-300 text-gray-700"
        >
          Next
        </button>
      </div>
      </div>

    </div>
  );
};

export default Price;