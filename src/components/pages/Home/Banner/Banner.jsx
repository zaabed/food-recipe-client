import React from 'react';
import banner from '../../../../assets/images/banner.png';
import img1 from '../../../../assets/images/img1.png';
import img2 from '../../../../assets/images/img2.png';
import img3 from '../../../../assets/images/img3.png';

const Banner = () => {
    return (
        <div className='grid justify-items-center mt-5 '>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1  items-center'>
                <div>
                    <h2 className='text-4xl font-semibold'> Get Freshly Cooked </h2>
                    <h1 className='text-8xl font-bold'>Home Food <br /> At  Your Doorstep</h1>
                    <h3 className='text-2xl font-medium'>For Fresh & Delicious home Food</h3>
                </div>
                <div>
                    <img className='' src={banner} alt="" />
                </div>
            </div>

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
    );
};

export default Banner;