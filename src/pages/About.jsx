import React from 'react';

const About = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3 text-gradient">About ClearQuote</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
          We believe in transparency, simplicity, and delivering outstanding value to every client.
        </p>
      </header>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card p-5 premium-shadow glassmorphism">
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-muted mb-4">
              ClearQuote was founded by vamp9 with a simple goal: to remove the friction from the digital agency pricing model. We want our clients to know exactly what they are paying for, instantly.
            </p>
            <h2 className="mb-4">Why Choose Us?</h2>
            <ul className="text-muted" style={{ lineHeight: '2' }}>
              <li><strong>Transparent Pricing:</strong> No hidden fees or surprise invoices.</li>
              <li><strong>Modern Technology:</strong> Built with the latest tools like React and Node.js for maximum performance.</li>
              <li><strong>Client-Centric:</strong> Your success is our success. We prioritize your needs at every step.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
