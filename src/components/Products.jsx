import React from "react";
import Table from "./ui/Table.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((data) => {
        console.log(data);
        setProduct(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading...</div>;
  }
  return (
    <div>
      <Table products={products} />
    </div>
  );
};

export default Products;
