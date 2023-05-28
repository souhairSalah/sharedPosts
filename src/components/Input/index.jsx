import React, { useEffect, useState } from 'react'

const Input = ({title, type, value, onChange}) => {
    return(
      <>
         <input type={type} value={value} onChange={onChange} className="w-full rounded-sm border-red-400 h-7{}"/> 
      </>
    );
   
   }
   
   export default Input;


