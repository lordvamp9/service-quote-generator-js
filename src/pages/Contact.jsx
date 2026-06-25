import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3 text-gradient">Contact Us</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Have a question or want to discuss a custom project? Reach out to us below.
        </p>
      </header>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card p-5 premium-shadow">
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div className="mb-4">
                <label className="form-label fw-bold">Name</label>
                <input type="text" className="form-control form-control-lg bg-light" required placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control form-control-lg bg-light" required placeholder="john@example.com" />
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control form-control-lg bg-light" rows="4" required placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
