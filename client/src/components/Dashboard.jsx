import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user);
  return (
    <div>
      <h1>Welcome, {user}</h1>
    </div>
  )
}

export default Dashboard