import React from "react";

function Tile ({name, image, specialty, weight, greased, hma}){

return (

    <div class="ui cards">
        <div class="card">
            {name} 
            <img src={image}></img>
            <h3>specialty: {specialty}</h3>
            <h3>weight: {weight}</h3>
            <h3>greased: {greased}</h3>
            <h3>highest medal awarded: {hma}</h3>
        </div>
        
   
        
    </div>
)
}

export default Tile