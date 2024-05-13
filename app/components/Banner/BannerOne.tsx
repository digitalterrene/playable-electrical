"use client";
import React, { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa6";
import { XMarkIcon } from "@heroicons/react/20/solid";
export default function BannerOne() {
  const [dismiss, setDismiss] = useState(false);
  return (
    <>
      {!dismiss && (
        <div className="bg-indigo-600">
          <div className="mx-auto max-w-8xl px-3 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg text-yellow-500 bg-indigo-800 p-2">
                  <FaLightbulb />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">
                    Illuminate Your Space with Playable Electrical!
                  </span>
                  <span className="hidden md:inline">
                    Illuminate Your Space with Playable Electrical!
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="/contact-us"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  Get a Free Quote
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={(_) => setDismiss(true)}
                  className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
