import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";


const ChefRecipes = () => {
    const recipes = useLoaderData();
    console.log(recipes);
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
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;