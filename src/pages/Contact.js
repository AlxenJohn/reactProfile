import React, { useState } from 'react';
import { Alert, Card, Button } from 'react-bootstrap'; // Importing Card and Button from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any additional logic here (like sending data to an API)
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Alert variant="success" className="text-center">
        <h2>Thank you, {formData.name}!</h2>
        <p>Your message has been sent.</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </Alert>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Contact Us</Card.Title>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Message:</label>
              <textarea
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" variant="primary" className="w-100">Submit</Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;