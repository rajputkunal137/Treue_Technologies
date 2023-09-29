// App.js
import React from 'react';
import UserRegistration from './Components/UserRegistration';
import Login from './Components/Login';
import VotingPage from './Components/VotingPage';
import AdminDashboard from './Components/AdminDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Import other components here

function App() {
  return (
    
      <div className="App">
        
        {/* <UserRegistration></UserRegistration>
        <Login></Login>
        <VotingPage></VotingPage>
        <AdminDashboard></AdminDashboard> */}

       <BrowserRouter>
         <Routes>
            <Route path="/" element={<UserRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/voting-app" element={<VotingPage />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter> 


      </div>
  );
}

export default App;
