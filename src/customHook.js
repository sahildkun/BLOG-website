import { useState, useEffect } from "react";




const useFetch = (url) => {
  

const [data, setData] = useState(null);
const [isloading , setIsloading] = useState(true);
  
const[error , setErr] = useState(null);

useEffect(() =>{


    setTimeout(() => {
      
    
   fetch(url)
   .then(res => {

   
   return res.json();
   })
   .then(data =>{
    setData(data);
    setIsloading(false);
    
    
   })
   .catch(()=>{
    setData(false);
    setIsloading(false);
     setErr(true);
   })
  }, 1000);},
   [] )



    return (  
        {data, isloading , error}
        

    );
}
 
export default useFetch;