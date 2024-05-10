"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Owner & Manager',
        name: 'Lucky Mandela',
        imgSrc: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1715342594~exp=1715346194~hmac=32d471490bb9957976037b183453c83311eec85c02823c0bd433cb52c65ee521&w=740',
    },
    {
        profession: 'Electrical Engineer',
        name: 'David Ramaphosa',
        imgSrc: 'https://img.freepik.com/free-photo/close-up-smiley-man-with-glasses_23-2149009406.jpg?t=st=1715340154~exp=1715343754~hmac=0bcfe1d81c011eb9a87fadfc09dcc83e18c93c1cf29edfca7109e99e32a81f9b&w=1380',
    },
    {
        profession: 'Electrician',
        name: 'Phil Mushiana',
        imgSrc: 'https://img.freepik.com/free-photo/screening-diagnosting-man-taking-pulse-white-wall_155003-40428.jpg?t=st=1715340176~exp=1715343776~hmac=f4b88f0d6fe102e4eb3cc6d79ef9dd0b113c60993e90585df15290e013406e30&w=1380',
    },
    {
        profession: 'Tim Gordon',
        name: 'Site Security Officer',
        imgSrc: 'https://img.freepik.com/free-photo/young-happy-man-standing-isolated_171337-1127.jpg?t=st=1715340205~exp=1715343805~hmac=ddeda8474b35437eb0106612fbb94f6df5f78be910c05868515eccd0295fcaeb&w=1380',
    },

]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center  font-semibold">Meet with our <br /> Team.</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative bg-red-900">
                                        <img src={items.imgSrc} alt="user-image"   className="inline-block h-[310px] rounded-2xl h-[480px] bg-red-500 object-cover object-center m-auto" />
                                        <div className="absolute right-10 bg-blue-100 top-6 bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div>
                                    </div>
                                    <div className="-mt-10 p-16">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
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
