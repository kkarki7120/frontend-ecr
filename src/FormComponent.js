import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Log form data
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await axios.post(`${backendUrl}/submit`, formData);
      console.log('Response data:', response.data); // Log response data
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error); // Log error
      setResponseMessage('An error occurred');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default FormComponent;
