import {useEffect } from "react";
import useAxios from "../hooks/useAxios";
import {useLocation} from 'react-router-dom';
import OneSignal from 'react-onesignal';
import Logo from "../components/Logo";
import Input from "../components/Input";
// import Modal from "../components/Modal";
import AddPost from "../components/AddPost";



export default function Home() {
  useEffect(() => {
    OneSignal.init({ appId:'c77bf5ca-d390-4ad6-a005-dd403c621e52'});
  });

  const onHandletag = (Tag) => {
    console.log("tagging");
    OneSignal.sendTag("tech", Tag).then(()=>{
      console.log("tagging");
    });
  }

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
      <div className="pt-4 px-4">
        <ul className="flex justify-between ">
          <li>
            <Logo/>
          </li>
          <li>
           <input type="text" className=" pl-2 w-72  border border-slate-600 h-9" placeholder="search" />
            {/* <Input type="search" className="w-72 border border-sky-500"/> */}
          </li>
          <li>saheer salah</li>
        </ul>
        <hr></hr>
        
        <h1>{responseData.statusCode}</h1>
        <div className=" px-24 ">
        <div className="  flex justify-between pb-2.5">
          <h1 className="text-lg font-semibold">List of post</h1>
          {/* <Modal header="Add Post"
           children= {
            <>
             <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent
                  you an email with all of the details of your order.
                </p>
              </div>
            </>
           }
           title="+" 
           classNamee="text-slate-50 w-10 h-10  rounded-full border border-sky-500 bg-sky-700"
           /> */}

           <AddPost/>
          {/* <button className="text-slate-50 w-3 h-3  rounded-full border border-sky-500 bg-sky-700">+</button> */}
        </div>
        <ul className="">
          {responseData.data.posts.map((i) => (
            <li className="flex flex-row  border border-slate-600 rounded mb-2">
              <img src={i.image} width={60} height={60} />
              <div className="flex flex-col">
                <p>{i.user.name}</p>
                <p>{i.text}</p>  
              </div>  
            </li>
          ))}
        </ul> 
        </div>
        


        

        

      </div>
    )
  };


  // const CurrentUser = getCookie(COOKIES_KEYS.currentUser);
  // const headers = { 'Authorization': `Bearer ${CurrentUser?.accessToken || ""}`};  
  // const token = location.state.AccessToken;
  // const {responseData, error, isloading, fetchData} = useAxios('https://talents-valley-backend.herokuapp.com/apinotifications/list','get',{
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${CurrentUser?.accessToken}`,
  // });

  // useEffect(() => {
  //   fetchData();
  // },[]);
  
  // if (isloading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }





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
  

  