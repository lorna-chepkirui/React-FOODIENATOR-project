import React from "react";
import MealItem from "./MealItem";

const Meal=() =>{
    return(
    <>
        <div className="main">
            <div className="heading">
                <h1><span>FOODIE</span>nator</h1>
                <h2>Search Your Food Recipe</h2>
            </div>
            <div className="searchBox">
                <input type="search" className="searchBar"/>
            </div>
            <div className="container">
                <MealItem/>
                <MealItem/>
                <MealItem/>
                <MealItem/>
                <MealItem/>
            </div>
        </div>
    </>
    )
}

export default Meal;