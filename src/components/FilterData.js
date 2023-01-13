// import React, { useEffect, useState } from 'react'
// import DataTable from 'react-data-table-component';


// function FilterData() {
//     const [data,setData]=useState([])
//     const [search,setSearch]=useState("")
//     const [filterdata,setFilterdata]=useState([])
//     useEffect(()=>{
//           fetch("https://data.cityofnewyork.us/resource/wewp-mm3p.json")
//           .then(response=> response.json())
//           .then(result=>setData(result))
//         //   .then(result=>setData(result))
//           .catch(error=>console.log(error));
//       },[])
//     useEffect(()=>{
//         setFilterdata(data)
//     },[search])
//     const columns=[
//         {
// 			name: "unique_id",
// 			selector: (row) => row.unique_id,
// 			sortable: true,
// 			id: "id",
//       filterable:true
// 		},
// 		{
// 			name: "date",
// 			selector: (row) => row.date.slice(0, 10),

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
//       ]
//       useEffect(()=>{
//         console.log("search update 123 useeffect")
//         console.log("search update 123 search",search)
//         const result=data.filter(rowdata =>{
//           return rowdata.agency_name.toLowerCase().startsWith(search.toLowerCase());
//         });
//         setFilterdata(result)
//        },[search])
      
//         return(
//           <> 
//           {console.log("any data",data)}
//  <DataTable title="311 call center "
//            columns={columns} 
//            data={filterdata} 
//            pagination
//            fixedHeader
//            fixedHeaderScrollHeight='550px'
//            selectableRows
//            selectableRowsHighlight
//            highlightOnHover
//            actions={
//             <button className='export-btn'>export</button> }
//           subHeader
//           subHeaderComponent={
//             <input type="text" placeholder="search here" className="input-search"
//             value={search}
//             onChange={(e)=>setSearch(e.target.value)}
//             />
//           }
//           subHeaderAlign="center"
//           /> 

//           </>
      
//         )
//       } 

// export default FilterData




import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./maindata.css"
import DataTable from 'react-data-table-component';
/**
 * 
 * @returns displays the main data
 */
function FilterData() {
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

	useEffect(() => {

		const result = data.filter(rowdata => {
			return rowdata.unique_id.toLowerCase().startsWith(search.toLowerCase())
				|| rowdata.inquiry_name.toLowerCase().startsWith(search.toLowerCase())
				|| rowdata.date.toLowerCase().startsWith(search.toLowerCase())
				|| rowdata.time.toLowerCase().startsWith(search.toLowerCase());
		});
		setFilterdata(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search])

	return (
		<>
			<div className="tabledata">
				
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

export default  FilterData;