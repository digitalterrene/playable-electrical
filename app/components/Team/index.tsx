import React from "react";

export default function Team() {
  return (
    <section className="py-24 bg-gray-50" id="our-team">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
              These people work on making our services best.
            </p>
            <a
              href="/contact-us"
              className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0"
            >
              Chat With An Expert
            </a>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              <img
                src="./assets/mentor/Person1.png"
                alt="Team  section"
                className="w-44 h-56 rounded-2xl bg-green-100 object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
              <img
                src="./assets/mentor/Person2.png"
                alt="Team  section"
                className="w-44 h-56 rounded-2xl bg-green-100 object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
              />
              <img
                src="./assets/mentor/Person3.png"
                alt="Team  section"
                className="w-44 h-56 rounded-2xl bg-green-100 object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
              />
              <img
                src="./assets/mentor/Person4.png"
                alt="Team  section"
                className="w-44 h-56 rounded-2xl bg-green-100 object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
              />
              <img
                src="./assets/mentor/Person5.png"
                alt="Team  section"
                className="w-44 h-56 rounded-2xl bg-green-100 object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
              />
              <img
                src="./assets/mentor/Person6.png"
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl bg-green-100 object-cover mx-auto min-[450px]:ml-0 md:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
