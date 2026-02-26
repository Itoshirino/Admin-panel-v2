import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "derek",
    password: "jklg*_56",
  });

  const navigate = useNavigate();


  //handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://fakestoreapi.com/auth/login", formData).then((data) => {
      if (data?.data?.token) {
        toast.success("Login successful");
        localStorage.setItem("token", data?.data?.token);
        navigate("/Dashboard");
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          border: "1px solid black",
          margin: "50px auto",
          padding: "20px 10px ",
          justifyContent: "center",
        }}
      >
        <input
          style={{ width: "100%", height: "50px" }}
          type="text"
          placeholder="username"
          value={formData.username}
          name="username"
          onChange={handleChange}
        />
        <input
          style={{ width: "100%", height: "50px" }}
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
};

export default LoginForm;
