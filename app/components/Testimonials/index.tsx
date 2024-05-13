"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Michael Lewis ",
    profession: "Midrand, Gauteng",
    comment:
      "As a property manager, I've worked with many electrical contractors over the years, but none have been as reliable and trustworthy as Playable Electrical. Their attention to detail and commitment to customer satisfaction make them stand out from the rest. I wouldn't hesitate to recommend them to anyone in need of electrical services.",
    imgSrc: "/assets/mentor/user3.png",
  },

  {
    name: "Thabo Mbatha",
    profession: "Tembisa, Gauteng",
    comment:
      "I recently hired Playable Electrical to upgrade the lighting in my home, and I couldn't be happier with the results. Their team was friendly, efficient, and attentive to detail, ensuring that the project was completed to perfection. I would definitely recommend them to anyone looking for top-quality electrical services.",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Nokuthula Mandela ",
    profession: "Randburg, Gauteng",
    comment:
      "Playable Electrical truly exceeded our expectations with their professionalism and expertise. From the initial consultation to the final installation, their team was a pleasure to work with. We're thrilled with the results and would highly recommend their services to anyone in need of electrical solutions",

    imgSrc: "/assets/testimonial/user.svg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <h2 className="font-manrope font-bold mb-5 text-4xl text-gray-900 text-center">
            Testimonials
          </h2>
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i} className="  ">
                <div
                  className={`bg-white  m-4 p-5 my-20 relative ${
                    i % 2 ? "middleDiv" : "testimonial-shadow"
                  }`}
                >
                  <div className="absolute top-[-45px]">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={100}
                      height={100}
                      className="inline-block"
                    />
                  </div>
                  <h4 className="text-base font-normal h-56 text-darkgray my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-lightgray" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
