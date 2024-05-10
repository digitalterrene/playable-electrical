"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Domestic Electrical',
        heading2: '',
        name: "",
        imgSrc: 'https://img.freepik.com/free-photo/electrical-technician-working-switchboard-with-fuses_169016-5512.jpg?t=st=1715340838~exp=1715344438~hmac=ed5829efdc917eaba95ef8da5f15e1ba3f82fbe46956a8dc8c86e9687616d411&w=996',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },

    {
        heading: 'Industrial Electrical',
        heading2: '',
        name: "",
        imgSrc: 'https://img.freepik.com/free-photo/high-voltage-electrical-transformers-electricity-distribution-power-plant-close-up_166373-1592.jpg?t=st=1715340866~exp=1715344466~hmac=eecb3a9b1a36d6e9cc81235f14165722b63f3a1d7e9f545b8a305c6e1fc4a97b&w=740',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Certificate Of Compliance',
        heading2: '',
        name: "",
        imgSrc: 'https://img.freepik.com/free-photo/close-up-graduation-diploma_23-2148928779.jpg?t=st=1715340939~exp=1715344539~hmac=b6f1efc8a994a75a83f6d826c988ef0a3414b1b3227c15c8fda63dd569484b75&w=740',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    } 
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Popular Services.</h3>
                        <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore more&nbsp;&gt;&nbsp;</Link>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses  h-auto rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <img src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto h-96 rounded-xl" />
                                    
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

 

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">View Gallery</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">Get Quote</h3>
                                            </div>
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
