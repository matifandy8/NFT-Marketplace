import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading";
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
          <Loading/>
        ) : errors ? (
          <h2>Error</h2>
        ) : (
          sem.map((product:ProductItem) => (
              <DetailsCard
                key={product._id}
                product={product}
                  />
            ))
        )}
    </div>
  );
};

export default ProductDetails;
