import React from "react";

function SortAndSearch ({handleFilter, handleSort}){

    return (
        <div>
            <h3>Filter By</h3>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="greased">Greased</option>
                <option value="notGreased">Not Greased</option>
            </select>
            <hr></hr>
            <h3>Sort By</h3>
            <select onChange={handleSort}>
                <option value="All">All</option>
                <option value="byName">by name</option>
                <option value="byWeight">by weight</option>
            </select>
        </div>
    )
}

export default SortAndSearch

