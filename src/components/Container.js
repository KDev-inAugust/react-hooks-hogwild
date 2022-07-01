import React from "react"
import Tile from "./Tile"


function Container ({data}){
    console.log(data);

    let cardsToDisplay=data;

    return(
        <div class="ui grid container">
            {cardsToDisplay.map(
                (index)=>{
                    return(<Tile 
                        name={index.name} 
                        image={index.image} 
                        specialty={index.specialty}
                        weight={index.weight}
                        greased={index.greased}
                        hma={index["highest medal achieved"]}

                    />)
                }
            )}
        </div>
    )
}

export default Container