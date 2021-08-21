import './ButtonLink.css';
import {Link} from "react-router-dom";

const ButtonLink = ({url,children})=>{

    return (
        <Link to={url} className="btn button-link btn-primary w-100">{children}</Link>
    )
}

export default ButtonLink;