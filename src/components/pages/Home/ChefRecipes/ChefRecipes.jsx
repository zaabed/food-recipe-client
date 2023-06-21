import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { FaArrowLeft, FaFacebook, FaInstagram, FaThumbsUp, FaTwitter, FaWhatsapp } from "react-icons/fa";


const ChefRecipes = () => {
    const recipes = useLoaderData();
    const navigation = useNavigation;
    const back = () => {
        navigation(-1)
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">

                <figure><img src={recipes.ChefPictureLink} alt="Album" /></figure>

                <div className="card-body text-center">
                    <div><h1 className='text-6xl font-bold'>{recipes.ChefName}</h1>
                        <p className='text-3xl text-red-600 font-bold mt-2'> Young Chef </p></div>
                    <div>
                        <p className='text-justify text-2xl font-bold'>About Me</p>
                        <p className='text-justify font-semibold mt-4'>{recipes.Description}</p>
                        <p className='text-justify'><b>Years of experience: {recipes.YearsOfExperience}</b></p>
                        <p className='text-justify'><b>Numbers of recipes: {recipes.NumbersOfRecipes}</b></p>
                        <p className='flex items-center'><FaThumbsUp className='me-2'></FaThumbsUp><b>{recipes.Likes}</b></p>
                    </div>
                    <div className="mt-10">
                        <h2 className='font-bold text-4xl text-justify text-amber-500'>FOLLOW ON</h2>

                        <div className='grid grid-flow-col gap-1 mt-5' style={{ fontSize: '2rem' }}>
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <FaWhatsapp></FaWhatsapp>
                        </div>

                    </div>

                </div>
            </div>

            <div className='mt-12'>
                <h1 className='text-4xl text-center font-bold'>HERE  <span className='text-red-600'>AVAILABLE</span> RECIPE</h1>
                <div className='mt-5 grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center gap-10'>
                    <div className="card card-compact w-96 bg-amber-50 shadow-xl">
                        <figure><img className='' src={recipes.recipeImg1} alt="Shoes" /></figure>
                        <div className="card-body bg-amber-50">
                            <h2 className="card-title text-3xl font-bold">{recipes.recipeName1}</h2>
                            <p className='card-title text-1xl font-bold text-red-600'>Cooking Method </p>
                            <p><b>{recipes.recipeCookingMethodDetails}</b></p>
                            <p><b>Numbers of recipes: {recipes.NumbersOfRecipes}</b></p>
                            <p className='flex items-center'><FaThumbsUp className='me-2'></FaThumbsUp><b>{recipes.Likes}</b></p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-amber-300" onClick={() => window.my_modal_3.showModal()}>Add Favorite</button>
                                <dialog id="my_modal_3" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Added Item On Your Favorite List</p>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-amber-50 shadow-xl">
                        <figure><img className='' src={recipes.recipeImg2} alt="Shoes" /></figure>
                        <div className="card-body bg-amber-50">
                            <h2 className="card-title text-3xl font-bold">{recipes.recipeName2}</h2>
                            <p className='card-title text-1xl font-bold text-red-600'>Cooking Method </p>
                            <p><b>{recipes.recipeCookingMethodDetails}</b></p>
                            <p><b>Numbers of recipes: {recipes.NumbersOfRecipes}</b></p>
                            <p className='flex items-center'><FaThumbsUp className='me-2'></FaThumbsUp><b>{recipes.Likes}</b></p>
                            <div className="card-actions justify-end">
                                {/* Open the modal using ID.showModal() method */}
                                <button className="btn bg-amber-300" onClick={() => window.my_modal_1.showModal()}>Add Favorite</button>
                                <dialog id="my_modal_1" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Added Item On Your Favorite List</p>
                                        <div className="modal-action">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-amber-50 shadow-xl">
                        <figure><img className='' src={recipes.recipeImg3} alt="Shoes" /></figure>
                        <div className="card-body bg-amber-50">
                            <h2 className="card-title text-3xl font-bold">{recipes.recipeName3}</h2>
                            <p className='card-title text-1xl font-bold text-red-600'>Cooking Method </p>
                            <p><b>{recipes.recipeCookingMethodDetails}</b></p>
                            <p><b>Numbers of recipes: {recipes.NumbersOfRecipes}</b></p>
                            <p className='flex items-center'><FaThumbsUp className='me-2'></FaThumbsUp><b>{recipes.Likes}</b></p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-amber-300" onClick={() => window.my_modal_2.showModal()}>Add Favorite</button>
                                <dialog id="my_modal_2" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Added Item On Your Favorite List</p>
                                    </form>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-actions justify-center mt-10">
                <Link to='/'><button onClick={back} className="btn bg-amber-300"><FaArrowLeft></FaArrowLeft>Back</button></Link>
            </div>

        </div>
    );
};

export default ChefRecipes;