import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>
            <h1>here recipe details on id</h1>
        </div>
    );
};

export default ChefRecipes;