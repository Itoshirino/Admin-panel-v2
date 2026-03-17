import CartsTable from "./ui/CartsTable.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/carts")
      .then((data) => {
        setCarts(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading...</div>;
  }
  return (
    <div>
      <CartsTable carts={carts} />
    </div>
  );
};

export default Carts;
