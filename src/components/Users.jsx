import React from "react";
import Table from "./ui/Table.jsx";
import axios from "axios";
import { useEffect } from "react";
const Users = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((data) => setUsers(data?.data));
  }, []);

  return (
    <div>
      <Table users={users} />
    </div>
  );
};

export default Users;
