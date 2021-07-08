import { useEffect, useState } from 'react';

const CommentCount = (props) => {

    const [commentLength, setCommentLength] = useState();
    const getCommentsLength = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + props.id + '/comments');
            const actualComment = await resp.json();
             console.log(actualComment.length);
            setCommentLength(actualComment.length);
            //  console.log(props.id);
        }

        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCommentsLength();
    }, []);

    return (
        <div>{commentLength}</div>
    );
}

export default CommentCount;