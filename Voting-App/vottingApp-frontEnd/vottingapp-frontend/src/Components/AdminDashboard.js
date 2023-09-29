import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [candidateVotes, setCandidateVotes] = useState({
    candidate1Votes: 0,
    candidate2Votes: 0,
    candidate3Votes: 0,
    candidate4Votes: 0,
  });

  useEffect(() => {
    // Fetch data using Axios
    axios.get('YOUR_API_ENDPOINT_HERE')
      .then((response) => {
        const data = response.data; // Assuming the response contains candidate votes
        setCandidateVotes(data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center " >
    <div className='m-3 p-3 border w-25 border-dark rounded'>
      <h1>Admin Dashboard</h1>
      <p>Candidate 1 Votes: <span>{candidateVotes.candidate1Votes}</span></p>
      <p>Candidate 2 Votes: <span>{candidateVotes.candidate2Votes}</span></p>
      <p>Candidate 3 Votes: <span>{candidateVotes.candidate3Votes}</span></p>
      <p>Candidate 4 Votes: <span>{candidateVotes.candidate4Votes}</span></p>
    </div>
    </div>
  );
}

export default AdminDashboard;
