import React from "react";

function Tile ({name, image, specialty, weight, greased, hma}){
    

    function handleTileClick(e){
        let target = e.currentTarget.children
        let targetArr = [target[2], target[3], target[4], target[5]]
        for (let index of targetArr){
            index.className==="hide" ? index.className="show" : index.className="hide"
        }
     }
return (
        <div className="pigTile" onClick={handleTileClick}>
            <h1>{name} </h1> 
            <img src={image}></img>
            <h3 className="hide">specialty: {specialty}</h3>
            <h3 className="hide">weight: {weight}</h3>
            <h3 className="hide">greased: {greased===true ? "true" : "false"}</h3>
            <h3 className="hide">highest medal awarded: {hma}</h3>
        </div>   
      
)
}

export default Tile

// target[2].className="show"