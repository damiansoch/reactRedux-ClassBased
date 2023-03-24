import React from 'react';
import '../scss/style.css';
import UserDetails from './UserDetails';
import UserList from './UserList';

const Home = (props) => (
  <div className='container mt-2'>
    <h1>User List:</h1>
    <UserList />
    <hr />
    <h2>UserDetails:</h2>
    <UserDetails />
  </div>
);
export default Home;
