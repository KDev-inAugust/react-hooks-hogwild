import React from "react";

function Tile ({name, image, specialty, weight, greased, hma}){
    
return (
    
        <div class="pigTile">
           <h1>{name} </h1> 
            <img src={image}></img>
            <h3>specialty: {specialty}</h3>
            <h3>weight: {weight}</h3>
            <h3>greased: {greased===true ? "true" : "false"}</h3>
            <h3>highest medal awarded: {hma}</h3>
        </div>
      
            
)
}

export default Tile