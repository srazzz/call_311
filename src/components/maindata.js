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



import React from 'react';
import {useEffect,useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
function Maindata() {
	const [Data, SetData] = useState([])
	const getData = async () => {
		try {
			const response =await axios.get("https://data.cityofnewyork.us/resource/wewp-mm3p.json");
			SetData(response.data);
			
				}catch (error) {
					console.log(error);
				}
				
		};
		console.log("maindata",Data)
		const columns = [
			{
				name: "unique_id",
				selector: (row) => row.unique_id,
			},
			{
				name: "date",
				selector: (row) => row.date,
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
			}
			,
			{
			  name:"agency_name",
			  selector:(row)=>row.agency_name,
			}
			,
			
			{
			  name:"call_resolution",
			  selector:(row)=>row.call_resolution,
			}
		]

		useEffect(() => {
			getData();
		}, [])
		return (
			<>
				{/* {console.log(props.data)} */}
				<DataTable title="311-CALL INQUIRY DATA"
					columns={columns}
					data={Data}
					pagination
					fixedHeader
					fixedHeaderScrollHeight />

			</>

		)
	}

	export default Maindata