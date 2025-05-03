'use client';

import React from "react";

function Recent() {
  return (
    <div className="mt-5">
      <div className="overflow-x-auto max-w-full">
        <div className="bg-white w-[719px] h-[335px]">
          <table className="min-w-full table-fixed border-collapse border-gray-300 text-xs">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-b border-gray-300 w-1/5">Tracking no</th>
                <th className="px-4 py-2 border-b border-gray-300 w-1/5">Product Name</th>
                <th className="px-4 py-2 border-b border-gray-300 w-1/5">Price</th>
                <th className="px-4 py-2 border-b border-gray-300 w-1/5">Total Order</th>
                <th className="px-4 py-2 border-b border-gray-300 w-1/5">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 border-t">
                <td className="px-4 py-2 border-b border-gray-200">#876364</td>
                <td className="px-4 py-2 border-b border-gray-200">Camera Lens</td>
                <td className="px-4 py-2 border-b border-gray-200">$178</td>
                <td className="px-4 py-2 border-b border-gray-200">325</td>
                <td className="px-4 py-2 border-b border-gray-200">$1,46,660</td>
              </tr>
              <tr className="hover:bg-gray-50 border-t">
                <td className="px-4 py-2 border-b border-gray-200">#876368</td>
                <td className="px-4 py-2 border-b border-gray-200">Black Sleep Dress</td>
                <td className="px-4 py-2 border-b border-gray-200">$14</td>
                <td className="px-4 py-2 border-b border-gray-200">53</td>
                <td className="px-4 py-2 border-b border-gray-200">$46,660</td>
              </tr>
              <tr className="hover:bg-gray-50 border-t">
                <td className="px-4 py-2 border-b border-gray-200">#876412</td>
                <td className="px-4 py-2 border-b border-gray-200">Argan Oil</td>
                <td className="px-4 py-2 border-b border-gray-200">$21</td>
                <td className="px-4 py-2 border-b border-gray-200">78</td>
                <td className="px-4 py-2 border-b border-gray-200">$3,46,676</td>
              </tr>
              <tr className="hover:bg-gray-50 border-t">
                <td className="px-4 py-2 border-b border-gray-200">#876621</td>
                <td className="px-4 py-2 border-b border-gray-200">EAU DE Parfum</td>
                <td className="px-4 py-2 border-b border-gray-200">$32</td>
                <td className="px-4 py-2 border-b border-gray-200">98</td>
                <td className="px-4 py-2 border-b border-gray-200">$3,46,981</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Recent;
