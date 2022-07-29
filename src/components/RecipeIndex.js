import React from "react";

const RecipeIndex=()=>{
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return (
        <>
        {
            alpha.map(item=>{
                return(
                    <div className="numBox">
                        <h3>{item}</h3>
                    </div>
                )
            } )
        }
        </>
    )
}

export default RecipeIndex;