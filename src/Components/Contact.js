import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    document.title = "Contact || LearnWith Atique";
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="text-center">
      <h2>Contact Us</h2>
      <div>
        <p>Email: <a href="mailto:LearnWithAtique@gmail.com">LearnWithAtique@gmail.com</a></p>
        <p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCBUF6tQOqVRr2El7qCdyUiFrZCJB8Zp6iQ&usqp=CAU" alt="WhatsApp" style={{ marginLeft: '5px', width: '35px', height: '35px' }} />
          03112334325</p>
        <p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrj64s2gAuJurjlgoKXJ6ORdrHt-RRGcH7g&usqp=CAU" alt="WhatsApp" style={{ marginLeft: '5px', width: '50px', height: '50px' }} />
          03112334324</p>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;

