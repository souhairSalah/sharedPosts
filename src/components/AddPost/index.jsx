import React, { useEffect, useState } from "react";
import Modal from "../Modal";
// import { API_URLS } from "../data/constant";




const AddPost = () => {
  const [text, setText] = useState();
  const [image, setImage] = useState();

  const data = new FormData();
  data.append("text", text);
  data.append("image", image);
  // const { fetchData, response } = useAxios();

  // const handleEditText = (e) => {
  //   setText(e.target.value);
  // };
  // const handleEditFile = (e) => {
  //   setImage(e.target.files[0]);
  // };
  // const handleAddClick = () => {
  //   if (!text) return;

  //   fetchData({
  //     url: API_URLS.ADD_POST,
  //     method: "post",
  //     data,
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("Token")}`,
  //       "content-type": "multipart/form-data",
  //     },
  //   });
  // };
  // if (response?.statusCode === 201) {
  //   closeModal();
  // }

    return(
    <>
      <Modal header="Add Post"
           children= {
            <>
             <div className="mt-2">
             <textarea
              name="postDetails"
              id="postDetails"
              cols="30"
              rows="4"
              // onChange={(e) => handleEditText(e)}
              className="block p-2.5 w-full text-sm text-gray-dark border border-gray-300 focus:ring-blue-500   border-gray focus:ring-0 focus:border-blue rounded-md mb-3 mt-2"
            ></textarea>
              <input type="file"  />
              {/* onChange={(e) => handleEditFile(e)} */}
              </div>
            </>
           }
           title="+" 
           classNamee="text-slate-50 w-10 h-10  rounded-full border border-sky-500 bg-sky-700"
           firstButton="Add"
           />
    </>
    );
   
   }
   
   export default AddPost;