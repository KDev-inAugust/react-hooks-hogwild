import React, {useState} from "react"
import Tile from "./Tile"
import { v4 as uuid } from "uuid";


function Container ({data}){
    
    let cardsToDisplay=data;

    return(
        <div>
            {cardsToDisplay.map(
                (index)=>{
                    return(<Tile 
                        key={uuid()}
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