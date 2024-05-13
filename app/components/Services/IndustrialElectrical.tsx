import React from "react";
import { GiAutoRepair, GiElectric } from "react-icons/gi";
import { BsShieldPlus } from "react-icons/bs";
import { RiBrainLine } from "react-icons/ri";
const highlights = [
  {
    point:
      "Our custom-designed power distribution systems maximize efficiency, reducing energy costs and enhancing operational performance.",
    icon: <GiElectric />,
  },
  {
    point:
      "Timely maintenance and rapid repair services keep your machinery running smoothly, minimizing disruptions and maximizing uptime.",
    icon: <GiAutoRepair />,
  },
  {
    point:
      "By prioritizing safety and compliance, we create a workplace where your team can thrive without compromise.",
    icon: <BsShieldPlus />,
  },
];
export default function IndustrialElectrical() {
  return (
    <div className="bg-white  py-16" id="industrial-electrical">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Our Services
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industrial Electrical
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Imagine a facility where every machine hums with efficiency,
                  where downtime is minimized, and where safety reigns supreme.
                  With our team of skilled technicians by your side, your
                  industrial space becomes a beacon of reliability and
                  innovation, driving your business forward.
                </p>
              </div>
            </div>
            <div className="  py-6">
              <span className="bg-indigo-50  text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
                Highlights
              </span>
            </div>
            <dl className=" space-y-2  border-t border-gray-900/10 pt-4 ">
              {highlights.map(({ point, icon }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <dt className="text-3xl bg-blue-100 text-blue-600 shadow-lg p-2 rounded-lg font-semibold leading-6  ">
                    {icon}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900">{point}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-10"
                src="/assets/banner/a_team_of_black_electricians_in_uniform_conducting_an_inspection_at_an_industrial_site_.jpeg"
                alt="a_team_of_black_electricians_in_uniform_conducting_an_inspection_at_an_industrial_site_"
              />
              <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-yellow-500 to-[#776fff] opacity-25"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <figure className="relative isolate">
                <div className="flex items-center gap-3">
                  <RiBrainLine className="text-4xl bg-white text-blue-500 shadow-lg p-1.5 rounded-lg font-semibold   " />
                  <h3 className="text-white">We know that...</h3>
                </div>
                <div className="mt-10 text-xl font-semibold leading-8 text-white">
                  <p>
                    In the heart of industrial operations, every electrical
                    connection powers progress and productivity. Our industrial
                    electrical services are the backbone of your success,
                    powering machinery, optimizing energy usage, and ensuring
                    uninterrupted workflow.
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
