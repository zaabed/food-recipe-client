import React from 'react';
import workImg from '../../../assets/images/work-back.png';
import brandIMg1 from '../../../assets/images/brand1.png';
import brandIMg2 from '../../../assets/images/brand2.png';
import brandIMg3 from '../../../assets/images/brand3.png';
import brandIMg4 from '../../../assets/images/brand4.png';
import brandIMg5 from '../../../assets/images/brand5.png';
import brandIMg6 from '../../../assets/images/brand6.png';
import Marquee from 'react-fast-marquee';

const Interested = () => {
    return (

        <div>
            <div className="hero  h-96 mt-14" style={{ backgroundImage: `url(${workImg})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div>
                    <h1 className=" text-7xl font-bold text-white">INTERESTED TO WORD WITH US ?</h1>
                    <p className="text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>

            <div className='d-flex p-5 mt-14'>
                <h1 className=" text-5xl font-bold text-red-600 text-center mb-10">OUR PARTNERS</h1>
                <Marquee speed={80} className='mb-5'>
                    <img src={brandIMg1} alt="Image" class="w-full h-auto " />
                    <img src={brandIMg2} alt="Image" class="w-full h-auto " />
                    <img src={brandIMg3} alt="Image" class="w-full h-auto " />
                    <img src={brandIMg4} alt="Image" class="w-full h-auto " />
                    <img src={brandIMg5} alt="Image" class="w-full h-auto " />
                    <img src={brandIMg6} alt="Image" class="w-full h-auto " />
                </Marquee>
            </div>
        </div>


    );
};

export default Interested;