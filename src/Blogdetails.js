import { useHistory, useParams } from "react-router-dom";
import useFetch from "./customHook";

const BlogDetails = () => {

   const { id } = useParams();
const {data : blog, error , isloading} = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleDelete = () => {

    fetch('http://localhost:8000/blogs/' + blog.id ,{

      method : 'DELETE',
    }).then(() => {
        history.push("/");
    })

}
    return (  

        <div className="blog-details">
            { isloading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}

        </div>
    );
}
 
export default BlogDetails;