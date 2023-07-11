import React from 'react'

const Coupons = () => {
  return (
    <div className="flex  gap-96">
          <p className=" text-xl mt-4 ml-5 mr-96">Coupons</p>
          <button className=" text-white p-1  hover:bg-zinc-600 bg-zinc-800 rounded-md mt-4 bold text-14 w-40 ml-36">
            <span className="mr-2">+</span>Add Coupon
          </button>
        </div>
  )
}

export default Coupons