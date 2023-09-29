import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function UserRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:8080/register', formData);
      
      if (response.status === 200) {  
        // Handle success, e.g., show a success message or redirect
        console.log('User registered successfully.');
        console.log(formData)
        navigate("/login")
      } else {
        // Handle error, e.g., display an error message
        console.error(response.data);
      }
    } catch (error) {
      // Handle network error or server error
      
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center " >
    <div className='m-3 p-3 border w-25 border-dark rounded bg-info bg-opacity-25'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='form-group'>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="form-control"
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
        /><br />
        <input type="submit" value="Register" />
      </form>
    </div>
    </div>
  );
}

export default UserRegistration;
