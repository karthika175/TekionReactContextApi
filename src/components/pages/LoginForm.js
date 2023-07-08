import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../connectors/ContextApi';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserId, setUserName } = useContext(ShopContext);

  useEffect(() => {
    setError('');
  }, [name, password]);

  const onSubmit = (e) => {
    e.preventDefault();
    let olddata = localStorage.getItem('formdata');
    let oldArr = JSON.parse(olddata);
   

    const foundUser = oldArr.find(
      (user) => user.name === name && user.password === password
    );

    if (foundUser) {
      setUserId(foundUser.userId);
      setUserName(foundUser.name);
      navigate(`/products/${foundUser.userId}`);
    }else {
      
      setError('Invalid Login credential ');
     
    }
    
    };

  return (
    <div className='loginDivContainer'>
      <div className='loginDiv'>
      <form onSubmit={onSubmit} className='loginForm'>
        {error && <p className="error">{error}</p>}
        <p className='loginTitle'> Login </p>
        <div className="formGroup">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='loginSubmit'>Login</button>
        <button type="button" className='regButton' onClick={() => navigate('/Register')}>
          Register
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;
