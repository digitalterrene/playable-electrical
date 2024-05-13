import React from "react";
import { FaHome } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FaIndustry } from "react-icons/fa6";
import { CustomLink } from "@/utils/CustomLink";
export default function ServicesHeaders() {
  return (
    <div className="max-w-5xl -mt-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center border bg-gradient-to-tr from-gray-900    to-[#776fff]   border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
        <div className="group relative  p-4 md:p-6 h-full flex flex-col  first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100">
          <div className="mb-5">
            <div className="p-2 w-fit h-fit rounded-full bg-yellow-500">
              <FaHome className="text-2xl   " />
            </div>

            <div className="mt-5">
              <h3 className="mt-5 font-medium text-lg text-white">
                Domestic Electrical
              </h3>
            </div>
          </div>
          <p className="mt-auto">
            <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
              <CustomLink onClick={() => {}} href="#domestic-electrical">
                <span aria-current="page">Learn More</span>
              </CustomLink>
            </span>
          </p>
        </div>

        <div className="group relative  p-4 md:p-6 h-full flex flex-col  first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100">
          <div className="mb-5">
            <div className="p-2 w-fit h-fit rounded-full bg-yellow-500">
              <FaIndustry className="text-2xl   " />
            </div>

            <div className="mt-5">
              <h3 className="mt-5 font-medium text-lg text-white">
                Industrial Electrical
              </h3>
            </div>
          </div>
          <p className="mt-auto">
            <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
              <CustomLink onClick={() => {}} href="#industrial-electrical">
                <span aria-current="page">Learn More</span>
              </CustomLink>
            </span>
          </p>
        </div>

        <div className="group relative  p-4 md:p-6 h-full flex flex-col  first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100">
          <div className="mb-5">
            <div className="p-2 w-fit h-fit rounded-full bg-yellow-500">
              <PiCertificateFill className="text-2xl   " />
            </div>
            <div className="mt-5">
              <h3 className="mt-5 font-medium text-lg text-white">
                Certificate of Compliance
              </h3>
            </div>
          </div>
          <p className="mt-auto">
            <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
              <CustomLink onClick={() => {}} href="#certificate-of-compliance">
                <span aria-current="page">Learn More</span>
              </CustomLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
