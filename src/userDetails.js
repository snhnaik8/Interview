import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CommentCount from './CommentCount';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const [details, setDetails] = useState(null);
    const [posts, setPosts] = useState();
    const { id } = useParams();


    const getUsersDetails = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            const actualData = await resp.json();
            setDetails(actualData);
        }
        catch (error) {
            console.log(error);
        }
    }
    const getPosts = async () => {

        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts');
            const actualPost = await resp.json();
            setPosts(actualPost);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsersDetails();
        getPosts();
    }, []);


    const handleDeleteUser = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id, { method: 'DELETE' });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <div className="card">
                <div className="container">

                    {(details != null) &&
                        <div>
                            <h2 className='pageHeader'> {details.name}({details.username})</h2>
                            <p> <strong>Email:</strong>{details.email}</p>
                            <p><strong>Adress:</strong>{details.address.street} </p>

                        </div>
                    }
                </div>
            </div>
            <div>
                <button className='deleteButton' onClick={handleDeleteUser}>Delete</button>
            </div>
            <h3 className='pageHeader'> Posts:</h3>

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Comments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(posts != null && posts.length > 0) ? posts.map((post, index) => {
                            return (
                                <tr key={index} >
                                    <td>{post.title}</td>
                                    <td>{<CommentCount id={post.id} />}</td>
                                    <td>{<Link to={'/postDetails/' + post.id}> Details </Link>}</td>
                                </tr>
                            )

                        }) : <tr><td colSpan="5">Loading...</td></tr>}

                    </tbody>
                </table>

            </div>
        </div>
    );

}

export default UserDetails;