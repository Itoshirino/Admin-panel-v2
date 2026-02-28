import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    e.preventDefault();
    axios.post("https://fakestoreapi.com/auth/login", formData).then((data) => {
      if (data?.data?.token) {
        toast.success("Login successful");
        setLoading(false);
        localStorage.setItem("token", data?.data?.token);
        navigate("/");
      }
    });
  };

  //Show Password // hide Password
  const showPassword = () => {
    const passwordInput = document.querySelector(".Password");
    const passwordIcon = document.querySelector(".passwd__icon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.remove("ri-eye-line");
      passwordIcon.classList.add("ri-eye-off-line");
    } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove("ri-eye-off-line");
      passwordIcon.classList.add("ri-eye-line");
    }
  };
  return (
    <div className="container">
      <form
        className="Form"
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
        <i className="ri-map-pin-user-fill user__icon"></i>

        <input
          className="Username"
          style={{ width: "100%", height: "50px" }}
          type="text"
          placeholder="username"
          value={formData.username}
          name="username"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={showPassword}
          className="inputs__btn password__icon"
        >
          <i className="ri-eye-line passwd__icon"></i>
        </button>

        <input
          className="Password"
          style={{ width: "100%", height: "50px" }}
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button disabled={loading} className="Submit" type="submit">
          {loading ? <div className="loader"></div> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
