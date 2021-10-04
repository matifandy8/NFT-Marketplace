import { Link } from "react-router-dom";
import { ProductItem } from "../../types";

const DetailsCard = ({ image, name, price, _id,description }: ProductItem) => {
  return (
    <div className="DetailsCard">
      <div className="title">
        <h1 className="name">{name}</h1>
        <img className="image" src={image} />
      </div>
      <div className="info">
        <p>Price ${price}</p>
        <p>Description {description}</p>
        {/* deberia agregar al carrito el
         producto si es que esta loguedo el user*/}
        <button className="button__blue">Buy</button>
      </div>
    </div>
  );
};

export default DetailsCard;
