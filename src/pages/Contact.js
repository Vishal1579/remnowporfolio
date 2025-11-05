import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // For determining success or error type

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    try {
      const response = await axios.post('http://localhost:5000/submit-form', {
        name,
        email,
        subject,
        message
      });

      if (response.status === 200) {
        setStatusMessage('Your message has been sent. Thank you!');
        setAlertType('success'); // Success alert type
        // Optionally, reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setStatusMessage('There was an error sending your message. Please try again.');
      setAlertType('danger'); // Error alert type
    }
  };

  return (
    <div className="contact">
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 style={{ paddingTop: '10%' }}>Contact</h1>
                  <p className="mb-0">
                    We’re here to answer your questions and help you connect with us easily. Reach out anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
               {/* Show success or error message */}
               {statusMessage && (
                    <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                      {statusMessage}
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  )}

            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay={300}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12 text-center">
               
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
    </div>
  );
}

export default Contact;
