import {useState, useEffect} from 'react'
import BlogList from './bloglist';
import useFetch from './customHook';



const Home = () => {

const {data : blogs , isloading , error} = useFetch("http://localhost:8000/blogs")






    return ( 

   <div className="home">
    {error && <div> fetch isuue</div>} 
   {isloading && <div> loading...  </div>}
  {blogs && < BlogList  blogs={blogs} title="All Blogs!"  />}
    

     
     

   </div>
     
     );
}
 
export default Home;