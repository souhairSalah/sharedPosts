import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import {useLocation} from 'react-router-dom';


export default function Home() {
  const location = useLocation();
  const token = location.state.AccessToken;
  const {responseData, error, isloading, fetchData} = useAxios('https://hakathon2023.onrender.com/api/post/list','get',{
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  useEffect(() => {
    fetchData();
  },[]);

 
 
  if (isloading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
    return (
      <div>
        <ul>
          {responseData.data.posts.map((i) => (
            <li className="flex flex-row">
              <img src={i.image} width={60} height={60} />
              <div className="flex flex-col">
                <p>{i.user.name}</p>
                <p>{i.text}</p>  
              </div>  
            </li>
          ))}
        </ul> 
      </div>
    )
  };



  // 'get',  {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     });

  // const {responseData, error, isLoading, sendRequest } = useAxios();
 

  // useEffect(() => {
  //   sendRequest('https://hakathon2023.onrender.com/api/post/list', 'get',  {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   });
  // },[]);


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
  

  