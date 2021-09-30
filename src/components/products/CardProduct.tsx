import { Link } from "react-router-dom"
import { ProductItem } from "../../types"

const CardProduct = ({ image, name, price, id }:ProductItem) => {
    return (
         <Link to={`/product/${id}`} className="info__button">   
        <div className="CardProduct">
            <img src={image}/>
        <div className="info">
            <p>{name}</p>
            <p>Price${price}</p>
        </div>
        </div>
       </Link> 
    )
}

export default CardProduct