import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //const response = await axios.post('http://localhost:8080/register', formData);
      const response = await axios.post('http://localhost:8080/login?username=kunal1&password=kunal@123');
      
      console.log(formData.username);
      // Handle the response or redirect as needed
      console.log(response.data); // You can replace this with your logic
      navigate("/voting-app")
    } catch (error) {
      console.error(error);
      console.log(formData.username);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center " >
    <div className='m-3 p-3 border w-25 border-dark rounded bg-info bg-opacity-25'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
    </div>
  );
}

export default Login;
