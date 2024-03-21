import { Link, useNavigate } from "react-router-dom";



const Post = ({ post }) => {
    const { id, title } = post;
    const  navigate = useNavigate();
    const userStyle = {
        border: '5px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDetails=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={userStyle}>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button className="bg-green-700 rounded-md ml-4 p-3 px-5">Show Details</button></Link>
            <br />
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;