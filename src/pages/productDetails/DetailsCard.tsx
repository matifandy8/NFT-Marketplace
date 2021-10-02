import { Link } from "react-router-dom";
import { ProductItem } from "../../types";

const DetailsCard = ({ image, name, price, _id }: ProductItem) => {
  return (
    <div className="DetailsCard">
      <div className="title">
        <h1 className="name">{name}</h1>
        <img className="image" src={image} />
      </div>
      <div className="info">
        <p>Price ${price}</p>
        <p>Description</p>
        <button className="btn__buy">Buy</button>
      </div>
    </div>
  );
};

export default DetailsCard;
