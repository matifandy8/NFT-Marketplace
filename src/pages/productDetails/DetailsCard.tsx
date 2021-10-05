import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { ProductItem } from "../../types";

const DetailsCard = ({ image, name, price, _id ,description, addtocart }: ProductItem) => {
   const dispatch = useDispatch();
  const history = useHistory();
  const handleAddToCart = (product:ProductItem) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
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
        <button className="button__blue" onClick={() => handleAddToCart(addtocart)}>Buy</button>
      </div>
    </div>
  );
};

export default DetailsCard;
