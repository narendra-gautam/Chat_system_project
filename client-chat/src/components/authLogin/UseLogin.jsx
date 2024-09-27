import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        navigate('/home')
      } else {
        alert('Incorrect email or password.');
      }
    } else {
      alert('No user found. Please register.');
    }
  };

  return (
    <div className='home__container'>
      <h2 className='home__header'>Login From</h2>
      <label htmlFor="">Email</label>
      <input
        type="email"
        placeholder="Email"
        className='username__input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/><br/>
      <label htmlFor="">Password</label>
      <input
        type="password"
        placeholder="Password"
        className='username__input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
      <button className='home__cta' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UseLogin;