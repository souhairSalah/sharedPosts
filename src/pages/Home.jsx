import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import {useLocation} from 'react-router-dom';


export default function Home() {
  const location = useLocation();
  const token = location.state.AccessToken;
  const {error, data, isloading} = useAxios('https://hakathon2023.onrender.com/api/post/list', {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  if (isloading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
    return (
      <div>
        {/* <h1>{data.data.posts}</h1> */}
        <ul>
          {data.data.posts.map((i) => (
            <li >{i._id}</li>
          ))}
        </ul> 
      </div>
    )
  };



{/* <ul>
          {data.posts.map((i) => (
            <li >{i.posts}</li>
          ))}
        </ul> */}



  // {reptiles.map((reptile, i)=>(
  //   <li>key {i} = {reptile}  </li>
  // ))}



  // <h1>
  //           hellOo hellOo {myfunc("saheer !")}
  //           {name.toUpperCase()}
  //         </h1>


  // <input type="text" value={text} onChange={handleChange}></input>


  // const [text, setText] = useState("");
  // const myfunc = name => name;
  // const  name = "saheer";
  // const filterr = (...arg)=>{
  //   return arg.filter(element => element===1);
  // }
  // const reptiles = ["hi", "hello", "hey"];
  // console.log(filterr(1,2,3,1,4));
  // const handleChange = (e) =>{
  //   setText(e.target.value.toUpperCase());
  // }
  // console.log(text);


  
  // const [cars, setCars] = useState({
  //   brand : "ford",
  //   color : "red",
  // });
  // setCars(prev => {
  //   return {...prev, color:"black"}
  // });
  

  