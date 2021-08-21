import Card from "./Card";
const UserDetailCard = (props)=>{
    const {user} = props;
    return (
        <Card cardClassNames={"user-details-card w-100 mb-3"}>
                <ul className="dashed">
                    <li>Name: {user.name}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Company: {user.company.name}</li>
                    <li>Website: {user.website}</li>
                    <li>Address:
                        <ul>
                            <li>Street: {user.address.street}</li>
                            <li>Suite: {user.address.suite}</li>
                            <li>City: {user.address.city}</li>
                            <li>ZipCode: {user.address.zipcode}</li>
                        </ul>
                    </li>

                </ul>
            </Card>
    )
};

export default UserDetailCard;


