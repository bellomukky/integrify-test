import UserCard from "../components/UserCard/UserCard";
import {useEffect, useState} from 'react';
import Spinner from "../components/Spinner/Spinner";
const HomePage = ()=>{
    const [users, setUsers ]  = useState([]);
    const [loading, setLoading ]  = useState(true);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result);
                    setLoading(false);
                },
                (error) => {
                  alert("Could not fetch users from the API.")
                }
            )
    },[]);
    return (
        <div className="container py-3 page-container">
            <h4 className={"mb-4"}>Placeholder Users</h4>
            {
                loading?<Spinner />:
                    <div className="row">
                        {
                            users.map(user=>{
                                return (
                                    <div key={user.id} className="col-md-4 col-12 col-sm-6 mb-4">
                                        <UserCard user={user} />
                                    </div>
                                )
                            })
                        }
                    </div>
            }


        </div>
    )
}

export default HomePage;