import React from "react";
import Table from "./ui/Table.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
<script src="http://localhost:8097"></script>;

const Products = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((data) => {
        console.log(data)
        setProduct(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false), console.error("error"));
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
