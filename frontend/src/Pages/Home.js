import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
    <>
      {token ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Navigate to={'/signin'} />
      )}
    </>
  );
};

export default Home;
