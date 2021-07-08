import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const PostDetails = () => {
    const [details, setDetails] = useState(null);
    const [comments, setComments] = useState();
    const { id } = useParams();


    const getPostDetails = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
            const actualData = await resp.json();
            console.log(id);
            setDetails(actualData);
            console.log(actualData);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getComments = async () => {

        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
            const actualPost = await resp.json();
            setComments(actualPost);
            //  console.log(props.id);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostDetails();
        getComments();
    }, []);


    return (
        <div>
                {(details != null) &&
                    <div>
                        <h2 className='pageHeader'>{details.title}</h2>
                        <p>{details.body} </p>
                    </div>
                }

                <h3 className='pageHeader'> Comments:</h3>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(comments != null && comments.length > 0) ? comments.map((comment, index) => {
                            return (
                                <tr key={index} >
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                </tr>)
                        }) : <tr><td colSpan="5">Loading...</td></tr>}
                    </tbody>
                </table>

            </div>
        </div>
    );

}

export default PostDetails;