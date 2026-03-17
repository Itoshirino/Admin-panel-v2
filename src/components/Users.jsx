import UsersTable from "./ui/UsersTable.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((data) => {
        setUser(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading...</div>;
  }
  return (
    <div>
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
