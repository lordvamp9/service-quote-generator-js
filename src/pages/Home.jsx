import React from 'react';
import QuoteCalculator from '../components/QuoteCalculator';

const Home = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-5 animate-fade-in">
        <h1 className="display-4 fw-bold mb-3 text-gradient">Instant Service Calculator</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Get a transparent, accurate estimate for your project in seconds. No hidden fees, just clear pricing.
        </p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <QuoteCalculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
