import { useEffect, useState } from "react";
import { supabase } from "../../libs/client";
import { ProductItem } from "../../types";
import CardProduct from "./CardProduct";


const ListProducts = () => {
  const [allProducts, setAllProducts] = useState<ProductItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts().catch(console.error);
  }, []);

  const fetchProducts = async () => {
    let { data: products, error }:any = await supabase.from("products").select("*");
    if (error) console.log("error", error);
    else setAllProducts(products);
  };

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
          <h2>
            Loading...
          </h2>
        ) : error ? (
          <h2>Error</h2>
        ) : (
          allProducts.filter((product:ProductItem) => {
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
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                id={product.id} 
                description={""}            
                  />
            ))
        )}
    </div>
    </div>
  );
};

export default ListProducts;
