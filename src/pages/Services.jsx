import React from 'react';

const Services = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3 text-gradient">Our Services</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          We offer a range of digital services tailored to elevate your business online.
        </p>
      </header>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 p-4 premium-shadow">
            <h3 className="h4 fw-bold">Web Design</h3>
            <p className="text-muted">Stunning, responsive websites that capture your brand's essence and convert visitors into customers.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 p-4 premium-shadow">
            <h3 className="h4 fw-bold">SEO Optimization</h3>
            <p className="text-muted">Rank higher on search engines and attract organic traffic with our proven, data-driven SEO strategies.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 p-4 premium-shadow">
            <h3 className="h4 fw-bold">Maintenance</h3>
            <p className="text-muted">Keep your website secure, fast, and up-to-date with our comprehensive maintenance and support plans.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
