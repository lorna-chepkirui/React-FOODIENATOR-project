import React, { useEffect, useState }  from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal=() =>{
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
        })
    },[url])
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
            <div className="indexContainer">
                <RecipeIndex/>
            </div>
        </div>
    </>
    )
}

export default Meal;