import React from 'react';
import Form from './Form';
import services from '../../services/api';

function Login(props) {
  return (
    <div className="login">
      <Form 
        label="Login"
        handleSubmit={services.login}
      />
    </div>
  )
}

export default Login;