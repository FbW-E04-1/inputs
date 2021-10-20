import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleForm}
      />
      <input
        type='text'
        name='age'
        placeholder='Age'
        value={formData.age}
        onChange={handleForm}
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleForm}
      />
    </form>
  );
};

export default Form;
