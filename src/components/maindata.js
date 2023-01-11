import React from 'react'
// import { Chart } from 'chart.js'
// import axios from 'axios'
import { useState } from 'react'
function Maindata() {
	const [data,setData] = useState()
	const fetchdata =() =>
	{
		console.log("reached function")
		fetch("https://data.cityofnewyork.us/resource/wewp-mm3p.json")
      .then(response => {
        return response.json()
      })
	  .then(data => {
        setData(data)
		console.log(data)
      })
	}

	return (
		<>
		<button onClick={fetchdata}>ggg</button>
		{
		<h1>{data[1].agency}</h1>
		}	
		</>
	)
}
export default Maindata