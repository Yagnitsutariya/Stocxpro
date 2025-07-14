import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:3002/auth/login",
      {
        ...inputValue,
      },
      { withCredentials: true }
    );
    const { success, message } = data;
    if (success) {
      handleSuccess(message);
      setTimeout(() => {
        window.location.href = "http://localhost:3001/";
      }, 1000);
    } else {
      handleError(message);
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      handleError(error.response.data.message); 
    } else {
      handleError("Login failed. Please try again.");
    }
  }
  setInputValue({
    email: "",
    password: "",
  });
};


  return (
    <div className="form_container">
      <h2 className="form_title">Login Account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form_input"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="form_group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form_input"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="form_button">
          Submit
        </button>
        <span className="form_link">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
