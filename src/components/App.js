import React, {useState} from "react";
import Nav from "./Nav";
import Container from "./Container";
import SortAndSearch from "./SortAndSearch";
import hogs from "../porkers_data";


function App() {
	const [filterState, setFilterState] = useState("All")
	const [dataState, setDataState] = useState(hogs)




	//----------filter function


	function handleFilter (e){
		setFilterState(e.target.value)
		console.log(e.target.value);
		console.log(dataState);
		
	
		switch (e.target.value){
			case 'greased' : {setDataState(dataState.filter(index=>index.greased===true))};
			break;
			case 'notGreased' : {setDataState(dataState.filter(index=>index.greased===false))}
			break;
			default: {setDataState(hogs)}
		}
	}

//-------sort function
	function handleSort (e){
		let nameArr=[];
		let weightArr=[];
		
	//---------populate name array
	for (let index in hogs)
	{nameArr.push(hogs[index].name)}
		nameArr.sort();


	//-------name data object is rebuilt to be passed on for rendering
	let nameObjs = []

	for (let index of nameArr){
		for (let hogsIndex in hogs){
			if (index === hogs[hogsIndex].name){
				nameObjs.push(hogs[hogsIndex])
			}
		}
	}

	//--------populate weight array

	for (let index in hogs)
		{weightArr.push(hogs[index].weight)}
		weightArr.sort();
		

	//--------weight data object is rebuilt to be passed on for rendering
	let weightObjs = []

	for (let index of weightArr){
		for (let hogsIndex in hogs){
			if (index === hogs[hogsIndex].weight){
				weightObjs.push(hogs[hogsIndex])
			}
		}
	}
	console.log(weightArr)
	console.log(weightObjs)

	switch (e.target.value){
		case 'byName' : {setDataState(nameObjs)};
		break;
		case 'byWeight' : {setDataState(weightObjs)}
		break;
		default: {setDataState(hogs)}
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
