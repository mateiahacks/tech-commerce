import React, { useState } from 'react';
import { StyledForm } from '../styles/Forms.styled';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', name: '', password: '' });
  const dispatch = useDispatch();
    
  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));

    console.log('Form data submitted:', formData);
  };

  return (
    <StyledForm
        onSubmit={handleSubmit}
    >
        <h1>Sign in to your account</h1>

        <Input 
          handleChange={handleChange}
          type={'email'}
          placeholder={'email'}
          name='email'
          value={email}
        />

        <Input 
          handleChange={handleChange}
          type={'password'}
          placeholder={'password'}
          name='password'
          value={password}
        />
        <Button>
          Sign in
        </Button>
        <Link to={'/register'}>
            <p>Register here</p>
        </Link>
    </StyledForm>
  );
};

export default LoginForm;
