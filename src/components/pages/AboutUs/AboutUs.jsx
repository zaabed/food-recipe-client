import React from 'react';
import innerBanner from '../../../assets/images/inner-banner.png';
import aboutImg from '../../../assets/images/about1.jpeg';
import burgerSVG from '../../../assets/images/burger.svg';
import farmSVG from '../../../assets/images/farm.svg';
import vehicleSVG from '../../../assets/images/vehicle.svg';
import a1 from '../../../assets/images/a1.png';
import a2 from '../../../assets/images/a2.png';
import a3 from '../../../assets/images/a3.png';
import a4 from '../../../assets/images/a4.png';
import workImg from '../../../assets/images/work-back.png';
import homeSVG from '../../../assets/images/home-svgrepo-com.svg'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (

        <div>
            <div className="hero  h-96" style={{ backgroundImage: `url(${innerBanner})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">ABOUT US</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex items-center justify-center font-bold text-2xl'>
                            <p className='bg-red-600 p-1 rounded-md'><Link to='/'>Home</Link></p>
                            <p className='bg-red-600 p-1 rounded-md ms-3'><Link >AboutUs</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center mt-14 '>

                <div className='p-4'>
                    <img className='rounded-md' src={aboutImg} alt="Album" />
                </div>

                <div className="p-4">
                    <h2 className='text-justify text-4xl font-bold text-red-600'>ABOUT ME</h2>
                    <p className='text-justify font-semibold mt-4'>Cookies & Cups enabled online presence takes a refreshingly no-frills, no nonsense approach. Large, high quality images of the restaurant's interior immerse you in the dining experience, while an automatically rotating image gallery of the eatery's various Asian-inspired dishes will have your mouth watering.

                        And Bombaywok's website doesn't just let its food do the talking, but its customers, too. Utilizing GoDaddy's social media integrations, the restaurant has pulled through its most persuasive reviews from Facebook, showcasing them on its site in an interactive carousel format.

                    </p>
                </div>
            </div>

            <div className=' card shadow-2xl grid lg:grid-cols-3 sm:grid-cols-1  mt-14 justify-items-center p-5 '>
                <div className='card-body items-center text-center'>
                    <div className=''><img className='w-24 h-24' src={burgerSVG} alt="" /></div>
                    <div className=''>
                        <p className='text-3xl font-bold'>Unique Taste</p>
                        <p className='text-red-600'>A burger is more than just a, it is a wish fulfilled</p>
                    </div>
                </div>
                <div className='card-body items-center text-center'>
                    <div className=''><img className='w-24 h-24' src={farmSVG} alt="" /></div>
                    <div className=''>
                        <p className='text-3xl font-bold'>Certified Farm</p>
                        <p className='text-red-600'>The last time you had a burger was too long ago.</p>
                    </div>
                </div>
                <div className='card-body items-center text-center'>
                    <div className=''><img className='w-24 h-24' src={vehicleSVG} alt="" /></div>
                    <div className=''>
                        <p className='text-3xl font-bold'>Home Delivery</p>
                        <p className='text-red-600'>Why are you still reading this - go get a burger!</p>
                    </div>
                </div>
            </div>

            <div className='mt-14'>
                <h1 className="mb-5 text-6xl font-bold text-red-600 text-center justify-center">CERTIFICATION  AND AWARDS</h1>
                <div className=' grid lg:grid-cols-4 sm:grid-cols-1  mt-10 justify-items-center'>
                    <div><img src={a1} alt="" /></div>
                    <div><img src={a2} alt="" /></div>
                    <div><img src={a3} alt="" /></div>
                    <div><img src={a4} alt="" /></div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;