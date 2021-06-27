import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( async () => {
        axios.get('api', )
            .then( response => {
                setUsers(users => response.data);
                console.log(response.data)
            })
            .catch( e => console.error(e));
    }, []);
    return (
        <div>
            <h1>Home</h1>
            {users && users.map((user, id) => {
                return (
                    
                    <div key ={id}>
                        <h1>{user.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;