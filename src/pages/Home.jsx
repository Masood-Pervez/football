import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://teamapi-qmnb.onrender.com/api/team/fetch/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);


  return ( 
    <div>

      <h1 className='text-2xl underline'>Football Team</h1>
      {
        data.map((res)=>{
          return(
          <ul>
           <li className='font-bold'>{res.nameCity}</li>
            <li>{res.nameTeam}</li>
            <hr className='border-1 border-black'/>

          </ul>
          )
        })
      }

    </div>
  )
}

export default Home
