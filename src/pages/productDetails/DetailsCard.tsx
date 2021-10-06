import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { ProductItem } from "../../types";

const DetailsCard = ({ product}: any) => {
   const dispatch = useDispatch();
  const history = useHistory();
  const handleAddToCart = (productId:string) => {
    console.log(productId)
    dispatch(addToCart(productId));
    history.push("/cart");
  };
  return (
    <div className="DetailsCard">
      <div className="title">
        <h1 className="name">{product.name}</h1>
        <img className="image" src={product.image} />
      </div>
      <div className="info">
        <p>Price ${product.price.toLocaleString()}</p>
        <p>Description {product.description}</p>
        <button className="button__blue" onClick={() => handleAddToCart(product)}>Buy</button>
      </div>
    </div>
  );
};

export default DetailsCard;
