// import React from 'react'
// // import { Chart } from 'chart.js'
// // import axios from 'axios'
// import { useState } from 'react'
// function Maindata() {
// 	const [data,setData] = useState()
// 	const fetchdata =() =>
// 	{
// 		console.log("reached function")
// 		fetch("https://data.cityofnewyork.us/resource/wewp-mm3p.json")
//       .then(response => {
//         return response.json()
//       })
// 	  .then(data => {
//         setData(data)
// 		console.log(data)
//       })
// 	}

// 	return (
// 		<>
// 		<button onClick={fetchdata}>ggg</button>

// 		</>
// 	)
// }
// export default Maindata



// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';
// function Maindata() {
// 	const [Data, SetData] = useState([])
// 	const getData = async () => {
// 		try {
// 			const response = await axios.get("https://data.cityofnewyork.us/resource/wewp-mm3p.json");
// 			SetData(response.data);

// 		} catch (error) {
// 			console.log(error);
// 		}

// 	};
// 	// console.log(data.length)

// 	const columns = [
// 		{
// 			name: "unique_id",
// 			selector: (row) => row.unique_id,
// 			sortable: true,
// 			id: "id"
// 		},
// 		{
// 			name: "date",
// 			selector: (row) => row.date.slice(0, 10),
// 			sortable:true
// 		},
// 		{
// 			name: "time",
// 			selector: (row) => row.time,

// 		},
// 		{
// 			name: "inquiry_name",
// 			selector: (row) => row.inquiry_name,
// 		},
// 		{
// 			name: "brief_description",
// 			selector: (row) => row.brief_description,
// 		},
// 		{
// 			name: "agency",
// 			selector: (row) => row.agency,
// 			sortable: true
// 		}
// 		,
// 		{
// 			name: "agency_name",
// 			selector: (row) => row.agency_name,
// 		}
// 		,

// 		{
// 			name: "call_resolution",
// 			selector: (row) => row.call_resolution,
// 		}
// 	]
// 	const handledate = () =>
// 	{
// 		console.log("hey")
// 	}

// 	useEffect(() => {
// 		getData();
// 	}, [])
// 	return (
// 		<>
// 			<div className="tabledata">
// 				<div className="dropdown">


// 					<select name="dopdown" id="cars">
// 						<option value="sortby">Sort by</option>
// 						<option value="id">id</option>
// 						<option value="date" onClick={handledate()}>Date</option>
// 						<option value="time">Time</option>
// 						<option value="agency">agency</option>
// 					</select>

// 				</div>
// 				<DataTable title="311-CALL INQUIRY DATA"

// 					columns={columns}
// 					data={Data}
// 					pagination
// 					fixedHeader
// 					fixedHeaderScrollHeight
// 					defaultSortFieldId={"id"}
// 				/>

// 			</div>
// 		</>

// 	)
// }

// export default Maindata




import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./maindata.css"
import DataTable from 'react-data-table-component';
/**
 * 
 * @returns displays the main data
 */
function Maindata() {
	const [data, setData] = useState([])
	const [search, setSearch] = useState("")
	const [filterdata, setFilterdata] = useState([])
	//fetching the data
	const getData = async () => {
		try {
			const response = await axios.get("https://data.cityofnewyork.us/resource/wewp-mm3p.json");
			setData(response.data);
			setFilterdata(response.data)

		} catch (error) {
			console.log(error);
		}

	};
	console.log("firstflow ------====", data)
	//assigning the column values
	const columns = [
		{
			name: "unique_id",
			selector: (row) => row.unique_id,
			sortable: true,
			id: "id"
		},
		{
			name: "date",
			selector: (row) => row.date.slice(0, 10),
		},
		{
			name: "time",
			selector: (row) => row.time,

		},
		{
			name: "inquiry_name",
			selector: (row) => row.inquiry_name,
		},
		{
			name: "brief_description",
			selector: (row) => row.brief_description,
		},
		{
			name: "agency",
			selector: (row) => row.agency,
			sortable: true
		}
		,
		{
			name: "agency_name",
			selector: (row) => row.agency_name,
		}
		,

		{
			name: "call_resolution",
			selector: (row) => row.call_resolution,
		}
	]
	// const handledate = () => {
	// 	sortable: true,
	// 	selector: (row) => row.date.slice(0, 10),
	// }
	//calling the function
	useEffect(() => {
		getData()
	}, [])
	console.log("search update 123 useeffecl data", data)
	console.log("filterdata for chart11111", filterdata)

	useEffect(() => {

		const result = data.filter(rowdata => {
			return rowdata.unique_id.toLowerCase().match(search.toLowerCase())
				|| rowdata.inquiry_name.toLowerCase().match(search.toLowerCase())
				|| rowdata.date.toLowerCase().match(search.toLowerCase())
				|| rowdata.time.toLowerCase().match(search.toLowerCase());
		});
		setFilterdata(result)
	}, [search])

	return (
		<>
			<div className="tabledata">
				{/* <div className="dropdown">


					<select name="dopdown" id="cars">
						<option value="sortby">Sort by</option>
						<option value="id">id</option>
						<option value="date" >Date</option>
						<option value="time">Time</option>
						<option value="agency">agency</option>
					</select>
				</div> */}
				<DataTable title="311-CALL INQUIRY DATA"

					columns={columns}
					data={filterdata}
					pagination
					fixedHeader
					fixedHeaderScrollHeight
					defaultSortFieldId={"id"}
					subHeader

					subHeaderComponent={
						<input type="text" placeholder="search here" className="input-search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					}
				/>

			</div>
		</>

	)
}

export default Maindata