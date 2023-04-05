import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const myfunc = name => name;
  const  name = "saheer";
  const filterr = (...arg)=>{
    return arg.filter(element => element===1);
  }
  const reptiles = ["hi", "hello", "hey"];
  console.log(filterr(1,2,3,1,4));
  const handleChange = (e) =>{
    setText(e.target.value.toUpperCase());
  }
  console.log(text);
  // const [cars, setCars] = useState({
  //   brand : "ford",
  //   color : "red",
  // });
  // setCars(prev => {
  //   return {...prev, color:"black"}
  // });
  
    return (
      <div>
        <div>
          <h1>
            hellOo hellOo {myfunc("saheer !")}
            {name.toUpperCase()}
          </h1>
          <ul>
            {reptiles.map((reptile, i)=>(
              <li>key {i} = {reptile}  </li>
            ))}
          </ul>
          <input type="text" value={text} onChange={handleChange}></input>
          </div>
      </div>
    )
  }

  