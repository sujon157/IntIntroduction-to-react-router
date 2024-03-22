import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();

    return (
        <div >
            <h2 className="text-3xl font-bold">Our users: {users.length}</h2>

            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;