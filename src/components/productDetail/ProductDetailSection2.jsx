import React from "react";
import { tableItems } from "./ProductDetailItems";

const ProductDetailSection2 = () => {
  return (
    <div className="hidden md:flex items-center mt-12 min-w-[600px] p-4 lg:min-w-[800px] mx-auto gap-8 justify-center flex-col border-2 ">
      <div className="w-full text-2xl  font-semibold p-2">
        <h2>Basic Data</h2>
      </div>
      {/* ---------Table------ */}
      <div className="w-full flex flex-col gap-4">
        <table className="">
          <tbody className="">
            {tableItems.map((tr, index) => (
              <tr key={index} className="border-b fle border-gray-200 odd:bg-gray-100 even:bg-white">
                <td className="p-2  pr-16  font-medium text-gray-600">
                  {tr.td1}
                </td>
                <td className="p-2  pl-16  text-gray-800">{tr.td2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-sm text-customBlue hover:underline underline-offset-2">
          <p>View All Parameters</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection2;
