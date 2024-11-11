import { useRef, useState } from 'react';
import "../styles/alert.css"

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const showAlert = (text, type = 'danger') => {
    setAlert({ show: true, text, type });
    setTimeout(() => setAlert({ show: false, text: '', type: 'danger' }), 3000); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://threedportfolio-ty3s.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.text();
      if (response.ok) {
        showAlert('Message sent successfully!', 'success');
        setForm({ name: '', email: '', message: '' });
      } else {
        showAlert('Failed to send message. Please try again later.', 'danger');
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('Something went wrong. Please try again later.', 'danger');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
    <div className="relative min-h-screen flex  justify-center flex-col lg:flex-row">

      <div className="contact-text lg:w-1/2  lg:text-left px-6">
        <h3 className="head-text">Let's talk</h3>
        <p className="text-lg text-white-600 mt-3">
          Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
        </p>
        <br/>
        <hr/>
      </div> 
      <div className="contact-form lg:w-1/2 mt-8 lg:mt-0 px-6">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7">
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="ex., Yash Sabne"
            />
          </label>
  
          <label className="space-y-3">
            <span className="field-label">Email address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="ex., myportfolio@gmail.com"
            />
          </label>
  
          <label className="space-y-3">
            <span className="field-label">Your message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Share your thoughts or inquiries..."
            />
          </label>
  
          <button className="field-btn" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
          </button>
  
          {alert.show && (
            <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'} show`}>
              {alert.text}
            </div>
          )}
        </form>
      </div>
    </div>
  </section>
  
  );
};

export default Contact;

