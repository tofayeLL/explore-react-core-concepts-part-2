import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h3>data: {users.length}</h3>
            {
                users.map(user => <User userInfo={user}></User> )
            }

        </div>
    )
}





/* 
step-1: declare a Use State to hold the data.
step-2: declare useEffects with two parameters (arrow function , dependency array).
step-3: use fetch to load data 
step-4: loaded data set in state
step-5: display data

*/