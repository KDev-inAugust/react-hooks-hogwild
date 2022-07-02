import React, {useState} from "react"
import Tile from "./Tile"


function Container ({data}){
    let [classState, setClassState] = useState("hide")
    let cardsToDisplay=data;

    

    return(
        <div>
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