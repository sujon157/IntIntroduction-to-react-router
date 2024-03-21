import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post=useLoaderData();
    const {postId}=useParams();
    const navigate=useNavigate();
    console.log(postId);
    // console.log(post);
    const {id,title,body}=post;
     
    const handleGOBack=()=> {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post Details about:{id}</h3>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
            <button className="bg-purple-600 px-5 p-2 rounded-md" onClick={handleGOBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;