
import "./Card.css";

const Card = ({children, cardClassNames})=>{
    return (
        <div className={`card ${cardClassNames}`}>
                <div className="card-body d-flex flex-column align-items-center">
                    {children}
                </div>
        </div>
    )
}

export default Card;