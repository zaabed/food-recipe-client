import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Chef = ({ chef }) => {

    // console.log(chef);
    const { ChefPictureLink, YearsOfExperience, NumbersOfRecipes, Likes, ChefName } = chef;


    return (
        <div className="card card-compact w-96 bg-amber-50 shadow-xl">
            <figure><img className='' src={ChefPictureLink} alt="Shoes" /></figure>
            <div className="card-body bg-amber-50">
                <h2 className="card-title text-3xl font-bold">{ChefName}</h2>
                <p><b>Years of experience: {YearsOfExperience}</b></p>
                <p><b>Numbers of recipes: {NumbersOfRecipes}</b></p>
                <p className='flex items-center'><FaThumbsUp className='me-2'></FaThumbsUp><b>{Likes}</b></p>
                <div className="card-actions justify-end">
                    <Link to={`/${chef._id}`}><button className="btn bg-amber-300"><span className='text-white font-bold'>View Recipes</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;