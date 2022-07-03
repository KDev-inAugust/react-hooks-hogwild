import React, {useState} from "react";
import Nav from "./Nav";
import Container from "./Container";
import SortAndSearch from "./SortAndSearch";
import hogs from "../porkers_data";


function App() {
	const [filterState, setFilterState] = useState("All")
	const [sortState, setSortState] = useState("All")
	const [dataState, setDataState] = useState(hogs)

	function handleFilter (e){
		setFilterState(e.target.value)
		console.log(e.target.value)
	}

	//------------in order to sort by name or weight we can arrange the data in this component before it is passed on for processing in teh container app. the data prop will be passed a variable that is pre-sorted. for name and weight try using the .sort method.
	function handleSort (e){
		setSortState(e.target.value);
		console.log(e.target.value);
		let nameArr=[];
		let weightArr=[];
		
	//---------make an if/then or ternary for how to assign sort state
	for (let index in hogs)
	{nameArr.push(hogs[index].name)}
		nameArr.sort();
		console.log(nameArr)

	//-------data object is rebuilt to be passed on for rendering
	let nameObjs = []
	for (let index of nameArr){
		for (let hogsIndex in hogs){
			if (index === hogs[hogsIndex].name){
				nameObjs.push(hogs[hogsIndex])
			}
		}
	}

	console.log(nameObjs)
	if (sortState==='byName'){
		setDataState(nameObjs)
	}	
	}

	return (
		<div className="App">
			<Nav />
			<SortAndSearch handleFilter={handleFilter} handleSort={handleSort}/>
			<Container data={dataState}/>
		</div>
	);
}

export default App;


