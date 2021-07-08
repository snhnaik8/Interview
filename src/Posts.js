import { useEffect, useState } from 'react';

const Posts = (props) => {

    const [postlength, setPost] = useState();
    const getPosts = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + props.id + '/posts');
            const actualPost = await resp.json();
            //       console.log(actualPost.length);
            setPost(actualPost.length);
            //  console.log(props.id);
        }

        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>{postlength}</div>
    );
}

export default Posts;