import React from 'react';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const userType = localStorage.getItem('user');
  return (
    <>
      {userType == 'admin' ? (
        <div> admin</div>
      ) : (
        <Navigate to={'/accessdenied'} />
      )}
    </>
  );
};

export default Admin;
