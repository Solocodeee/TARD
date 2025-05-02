'use client';

import React from "react";
import Image from "next/image"; // استيراد Image

function TopSelling() {
  return (
       <div className="bg-white w-[447px] h-[335px] mt-5">
      <div className="topSelling p-4 h-full w-full">
        <div className="topDetails w-full h-full flex flex-col justify-between">
          {/* العنصر الأول */}
          <div className="cart1 flex items-start rounded-lg gap-4">
            <Image
              src="/images/Mask Group.svg"
              alt="Product"
              width={96}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold">اسم المنتج</h3>
              <div className="text-yellow-400 text-2xl mt-1">★★★★☆</div>
              <p className="text-gray-800 font-bold mt-2">السعر: $99.99</p>
            </div>
          </div>

          {/* خط فاصل */}
          <hr className="my-2 border-gray-300" />

          {/* العنصر الثاني */}
          <div className="cart1 flex items-start rounded-lg gap-4">
            <Image
              src="/images/Mask Group.svg"
              alt="Product"
              width={96}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold">اسم المنتج</h3>
              <div className="text-yellow-400 text-2xl mt-1">★★★★☆</div>
              <p className="text-gray-800 font-bold mt-2">السعر: $99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default TopSelling;
