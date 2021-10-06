import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productsSelector } from "../../features/productSlice";
import { ProductItem } from "../../types";
import Loading from "../loading";
import CardProduct from "./CardProduct";


const ListProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const { products, loading, errors } = useSelector(productsSelector)

  console.log(products, loading, errors)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="ListProducts">
    <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="products">
        
        {loading ? (
             <div className="loading">
        <Loading/>
        </div>
        ) : errors ? (
          <h2>Error</h2>
        ) : (
          products.filter((product:ProductItem) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product:ProductItem) => (
              <CardProduct
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
    </div>
  );
};

export default ListProducts;
