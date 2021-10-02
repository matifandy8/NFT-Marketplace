import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "../../components/products/CardProduct";
import { store } from "../../store";
import { ProductItem } from "../../types";
import DetailsCard from "./DetailsCard";

const ProductDetails = () => {
  const [sem, setSem] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);


  const { id }: any = useParams();
  useEffect(() => {
    const currentState = store.getState();
    console.log(id);
    setTimeout(() => {
      setSem(currentState.productsStore.products.filter((el) => el._id == id));
      setLoading(false)
    }, 3000);
  }, []);
  console.log(sem);

  return (
    <div className="productDetails">
     {loading ? (
          <h2>
            Loading...
          </h2>
        ) : errors ? (
          <h2>Error</h2>
        ) : (
          sem.map((product:ProductItem) => (
              <DetailsCard
                key={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                _id={product._id} 
                description={""}            
                  />
            ))
        )}
    </div>
  );
};

export default ProductDetails;
