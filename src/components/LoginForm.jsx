import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = ({onLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.previousElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    try {
      const { data } = await axios.post('v1/student/logIn', {
        email,
        password,
      });

      console.log(data);

      Cookies.set('refresh_token', data.refresh_token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;

      if (data.status === 'Log in success!') {
        onLoginSuccess(); 
        navigate('/HomePage');
      } else if (data=== 'incorrect password') {
        setPasswordError('Incorrect password. Please try again.');
      } else if (data === 'No Student is found with the email') {
        setEmailError('No student found with the email. Please try again.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='mx-auto'>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div className='mb-16'>
            <h1 className='mt-6 ml-[-120px] md:mt-10 md:ml-[0px] text-center text-2xl font-bold leading-9 tracking-tight create-account-style'>Login</h1>
          </div>
          <div className='form-field'>
            <div className='mb-16'>
              <label htmlFor="email" className={email ? 'hidden' : ''}>
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="p-2 registration-width md:w-[350px] h-[10px] w-[290px] h-[10px] md:h-[38px] blank-form"
              />
              {emailError && <p className="text-red-500 text-sm]">{emailError}</p>}
            </div>
          </div>
          <div className='form-field'>
            <div className='mb-16'>
              <label htmlFor="password" className={password ? 'hidden' : ''}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="p-2 registration-width md:w-[350px] h-[10px] w-[290px] h-[10px] md:h-[38px] blank-form"
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button type="submit" className='signuppage-layout signup-button'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;