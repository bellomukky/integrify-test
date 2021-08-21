
import ButtonLink from "../ButtonLink/ButtonLink";
import UserCardIcon from "./UserCardIcon";
import Card from "./Card";

const UserCard = (props)=>{
    const {user} = props;
    return (
        <Card cardClassNames={"user-card w-100"}>
            <UserCardIcon initial={user.name[0]} />
            <h6 className="user-name">{user.name}</h6>
            <p className="user-handle">@{user.username}</p>
            <p className="user-website">
                <a rel="noreferrer" href={user.website} target="_blank">{user.website}</a>
            </p>
            <ButtonLink url={`/users/${user.id}`}>More Details</ButtonLink>
        </Card>
    )
}

export default UserCard;