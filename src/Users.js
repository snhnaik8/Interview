import { useEffect, useState } from 'react';
import Posts from './Posts';
import { Link } from 'react-router-dom';
import { getData } from './Api'

const Users = () => {

    const [users, setUsers] = useState(null);

    const getUsers = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const actualData = await resp.json();
            //  console.log(actualData);
            setUsers(actualData);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
           <h2 className='pageHeader'>Users</h2> 
            <table className='table' >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Post</th>
                        <th>User Details</th>

                    </tr>
                </thead>
                <tbody>

                    {(users != null && users.length > 0) ? users.map((user, index) => {
                        return (
                            <tr key={index} className='active-row'>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td >{user.username}</td>
                                <td >{<Posts id={user.id} />}</td>
                                <td >{<Link to={'/userDetails/' + user.id}> Details </Link>}</td>
                            </tr>
                        )

                    }) : <tr><td colSpan="5">Loading...</td></tr>}

                </tbody>
            </table>
        </div>
    );
}

export default Users;