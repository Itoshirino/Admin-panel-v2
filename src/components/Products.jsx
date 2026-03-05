import React from "react";
import Table from "./ui/Table.jsx";
import axios from "axios";

const Products = () => {
  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://dummyjson.com/products").then((data) => {
      setProduct(data?.data?.products);
    });
  }, []);

  return (
    <div>
      <Table products={products} />
    </div>
  );
};

export default Products;
