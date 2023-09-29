import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




function VotingPage() {
  const navigate = useNavigate();

  const [voterName, setVoterName] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleNameChange = (e) => {
    setVoterName(e.target.value);
  };

  const handleCandidateChange = (e) => {
    setSelectedCandidate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      voterName: voterName,
      candidate: selectedCandidate,
    };

    axios.post(' http://localhost:8080/vote', formData)
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        navigate("/voting-app");
        window. location. reload();
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center " >
    <div className='m-3 p-3 border w-25 border-dark rounded bg-info bg-opacity-25'>
      <h1>Voting Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="voterName"
          placeholder="Your Name"
          className="form-control"
          value={voterName}
          onChange={handleNameChange}
        /><br />
        <label>
          <input
            type="radio"
            name="candidate"
            value="candidate1"
            className="form-control"
            checked={selectedCandidate === 'candidate1'}
            onChange={handleCandidateChange}
          /> Candidate 1
        </label><br />
        <label>
          <input
            type="radio"
            name="candidate"
            value="candidate2"
            className="form-control"
            checked={selectedCandidate === 'candidate2'}
            onChange={handleCandidateChange}
          /> Candidate 2
        </label><br />
        <label>
          <input
            type="radio"
            name="candidate"
            value="candidate3"
            className="form-control"
            checked={selectedCandidate === 'candidate3'}
            onChange={handleCandidateChange}
          /> Candidate 3
        </label><br />
        <label>
          <input
            type="radio"
            name="candidate"
            value="candidate4"
            className="form-control"
            checked={selectedCandidate === 'candidate4'}
            onChange={handleCandidateChange}
          /> Candidate 4
        </label><br />
        <input type="submit" value="Vote" className="form-control" />
      </form>
    </div>
    </div>
  );
}

export default VotingPage;
