import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = { name,email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful!');
    navigate('/login')
  };

  return (
    <div className='home__container'>
      <h2 className='home__header'>Register Form</h2>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        placeholder="Name"
        className='username__input'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/><br/>
      <label htmlFor="">Email: </label>
      <input
        type="email"
        placeholder="Email"
         className='username__input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <br/><br/>
       <label htmlFor="">password: </label>
      <input
        type="password"
        placeholder="Password"
         className='username__input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <br/><br/>
      <button className='home__cta' onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;