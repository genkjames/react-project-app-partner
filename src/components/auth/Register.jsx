import React from 'react';
import Form from './Form';
import services from '../../services/api';

function Register(props) {
  return (
    <div className="register">
      <Form
        label="Sign Up"
        handleSubmit={services.register}
      />
    </div>
  )
}

export default Register;