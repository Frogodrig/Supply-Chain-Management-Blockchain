import React, { useState } from 'react';
import axios from 'axios';

const UserDetailsComponent = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [userId, setUserId] = useState('');

  const handleGetMyDetails = async () => {
    try {
      const result = await axios.get('/user/getMyDetails');
      setUserDetails(result.data);
    } catch (error) {
      setUserDetails({ error: error.message });
    }
  };

  const handleGetUserDetails = async () => {
    try {
      const result = await axios.get(`/user/getUserDetails?userId=${userId}`);
      setUserDetails(result.data);
    } catch (error) {
      setUserDetails({ error: error.message });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Get My Details</h2>
      <button type="button" className="btn btn-primary" onClick={handleGetMyDetails}>
        Get My Details
      </button>

      <h2 className="mt-4">Get User Details</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleGetUserDetails}>
          Get User Details
        </button>
      </form>

      <h2 className="mt-4">Response</h2>
      <pre>{JSON.stringify(userDetails, null, 2)}</pre>
    </div>
  );
};

export default UserDetailsComponent;
