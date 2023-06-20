import React from 'react';
import banner from '../../../../assets/images/banner.png';
import img1 from '../../../../assets/images/img1.png';
import img2 from '../../../../assets/images/img2.png';
import img3 from '../../../../assets/images/img3.png';
import { FaQuoteRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className=' grid justify-items-center mt-5 w-full'>


            <div className='grid lg:grid-cols-2 sm:grid-cols-1  items-center p-5'>
                <div>
                    <h2 className='text-4xl font-semibold'> Get Freshly Cooked </h2>
                    <h1 className='text-8xl font-bold'>Home Food <br /> At  Your Doorstep</h1>
                    <h3 className='text-2xl font-medium'>For Fresh & Delicious home Food</h3>
                </div>
                <div>
                    <img className='w-full' src={banner} alt="" />
                </div>
            </div>


            <div className=' mt-5'>
                <h1 className='text-4xl text-center font-bold'>HOW IT WORK</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10  mt-5'>
                    <div className="card card-compact w-96  bg-red-600 shadow-xl p-4 ">
                        <figure><img className='h-64 w-64' src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold text-white">PICKUP FOOD</h2>
                        </div>
                    </div>
                    <div className="card card-compact w-96  bg-amber-300 shadow-xl p-4 ">
                        <figure><img className='h-64 w-64' src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold">GET DELIVERY</h2>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-amber-50 shadow-xl p-4 ">
                        <figure><img className='h-64 w-64' src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold">EXPLORE SHOPE</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='mt-12 '>
                <h1 className='text-4xl text-center font-bold'>HAPPY CUSTOMER REVIEW</h1>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='w-4/5 mx-auto'>
                            <div className=' flex items-center justify-center text-6xl mt-5 '>
                                <p><FaQuoteRight></FaQuoteRight></p>
                            </div>

                            <div className='text-center text-3xl font-semibold bg-pink-50 rounded-md p-5'>
                                <p>The recipes are straight-forward to cook and original. I do enjoy the balance between an introduction of the background for each recipe and the way the recipe written. Photography in the book is nice, mouthwatering almost. </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='w-4/5 mx-auto'>
                            <div className=' flex items-center justify-center text-6xl mt-5 '>
                                <p><FaQuoteRight></FaQuoteRight></p>
                            </div>

                            <div className='text-center text-3xl font-semibold bg-lime-100 rounded-md p-5'>
                                <p>The recipes are straight-forward to cook and original. I do enjoy the balance between an introduction of the background for each recipe and the way the recipe written. Photography in the book is nice, mouthwatering almost. </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='w-4/5 mx-auto'>
                            <div className=' flex items-center justify-center text-6xl mt-5 '>
                                <p><FaQuoteRight></FaQuoteRight></p>
                            </div>

                            <div className='text-center text-3xl font-semibold bg-amber-100 rounded-md p-5'>
                                <p>The recipes are straight-forward to cook and original. I do enjoy the balance between an introduction of the background for each recipe and the way the recipe written. Photography in the book is nice, mouthwatering almost. </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='w-4/5 mx-auto'>
                            <div className=' flex items-center justify-center text-6xl mt-5 '>
                                <p><FaQuoteRight></FaQuoteRight></p>
                            </div>

                            <div className='text-center text-3xl font-semibold bg-orange-50 rounded-md p-5'>
                                <p>The recipes are straight-forward to cook and original. I do enjoy the balance between an introduction of the background for each recipe and the way the recipe written. Photography in the book is nice, mouthwatering almost. </p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Banner;