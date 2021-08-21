
import UserDetailCard from "../components/UserCard/UserDetailCard";

import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Spinner from "../components/Spinner/Spinner";
const UserDetail = ()=>{
    const [user, setUser ]  = useState({});
    const [loading, setLoading ]  = useState(true);
    let { id } = useParams();
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setUser(result);
                    setLoading(false);
                },
                (error) => {
                  alert(`Could not fetch user with ID: ${id}`)
                }
            )
    },[id]);
    return (
            <div>

                <div className="row">
                    {
                        loading?<Spinner />:
                             <div className="col-12 col-md-6 offset-md-3 user-details-container px-md-5">
                                 <h4 className={"mb-4 text-center"}>User Detail</h4>
                                 <UserDetailCard user={user}/>
                                <ButtonLink url={"/"}> &larr; Return to Homepage</ButtonLink>
                            </div>
                    }
                </div>
            </div>
    )
}

export default UserDetail;