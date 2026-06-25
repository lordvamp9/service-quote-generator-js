import React, { useState } from 'react';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

const tiers = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: 150,
    desc: 'Standard setup, 3 pages, essential features.',
    badge: 'bg-light text-dark border',
  },
  {
    id: 'pro',
    name: 'Professional Package',
    price: 300,
    desc: 'Custom design, 8 pages, CMS integration.',
    badge: 'bg-primary-subtle text-primary border border-primary-subtle',
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 500,
    desc: 'Full custom development, unlimited pages, API integrations.',
    badge: 'bg-dark text-white',
  },
];

const availableAddons = [
  { id: 'seo', name: 'Advanced SEO', price: 75 },
  { id: 'support-std', name: 'Standard Support', price: 50 },
  { id: 'support-pro', name: '3 Months Priority Support', price: 120 },
];

const QuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(null);
  const [addons, setAddons] = useState([]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleTierChange = (e) => {
    const tierId = e.target.value;
    const tier = tiers.find((t) => t.id === tierId);
    setSelectedTier(tier);
    setError('');
  };

  const handleAddonChange = (e) => {
    const addonId = e.target.value;
    if (e.target.checked) {
      const addon = availableAddons.find((a) => a.id === addonId);
      setAddons([...addons, addon]);
    } else {
      setAddons(addons.filter((a) => a.id !== addonId));
    }
  };

  const calculateTotal = () => {
    const base = selectedTier ? selectedTier.price : 0;
    const extras = addons.reduce((sum, a) => sum + a.price, 0);
    return base + extras;
  };

  const handleNext = () => {
    if (step === 1 && !selectedTier) {
      setError('Please select a service tier to continue.');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceTier: selectedTier,
          addons,
          totalCost: calculateTotal(),
          contactEmail: email,
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setSuccess(true);
    } catch (err) {
      setError('Failed to send quote. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-5 animate-fade-in">
        <FaCheckCircle className="text-success mb-4" size={64} />
        <h2 className="fw-bold mb-3">Quote Sent Successfully!</h2>
        <p className="text-muted lead mb-4">
          Thank you for considering our services. We have received your request and will contact you at <strong>{email}</strong> shortly.
        </p>
        <button className="btn btn-outline-primary" onClick={() => window.location.reload()}>
          Calculate Another Quote
        </button>
      </div>
    );
  }

  return (
    <div className="card premium-shadow animate-fade-in">
      <div className="card-body p-4 p-md-5">
        {/* Stepper */}
        <div className="stepper-wrapper">
          <div className={`stepper-item ${step >= 1 ? (step > 1 ? 'completed' : 'active') : ''}`}>
            <div className="step-counter">{step > 1 ? <FaCheckCircle /> : 1}</div>
            <div className="step-name">Service</div>
          </div>
          <div className={`stepper-item ${step >= 2 ? (step > 2 ? 'completed' : 'active') : ''}`}>
            <div className="step-counter">{step > 2 ? <FaCheckCircle /> : 2}</div>
            <div className="step-name">Add-ons</div>
          </div>
          <div className={`stepper-item ${step >= 3 ? 'active' : ''}`}>
            <div className="step-counter">3</div>
            <div className="step-name">Quote</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Tier */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="mb-4">Select Your Service Tier</h3>
              {tiers.map((tier) => (
                <div className="form-check p-3 mb-3 service-option" key={tier.id}>
                  <input
                    className="form-check-input ms-0 me-3 mt-2"
                    type="radio"
                    name="serviceTier"
                    id={`tier-${tier.id}`}
                    value={tier.id}
                    checked={selectedTier?.id === tier.id}
                    onChange={handleTierChange}
                  />
                  <label className="form-check-label w-100" htmlFor={`tier-${tier.id}`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong className="fs-5">{tier.name}</strong>
                      <span className={`badge ${tier.badge}`}>${tier.price} USD</span>
                    </div>
                    <div className="text-muted small mt-1">{tier.desc}</div>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Add-ons */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="mb-4">Enhance Your Project</h3>
              {availableAddons.map((addon) => (
                <div className="form-check form-switch p-3 mb-3 add-on" key={addon.id}>
                  <input
                    className="form-check-input ms-0 me-3 mt-1"
                    type="checkbox"
                    id={`addon-${addon.id}`}
                    value={addon.id}
                    checked={addons.some((a) => a.id === addon.id)}
                    onChange={handleAddonChange}
                  />
                  <label className="form-check-label w-100" htmlFor={`addon-${addon.id}`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong className="fs-5">{addon.name}</strong>
                      <span className="text-primary fw-bold">+${addon.price} USD</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Final Quote */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="mb-4">Your Custom Quote</h3>
              <div className="bg-gradient-primary rounded-4 p-4 text-center mb-4 border border-primary border-opacity-25">
                <h5 className="text-primary mb-2 opacity-75">Estimated Total</h5>
                <h1 className="display-3 fw-bold mb-0 text-primary">${calculateTotal()} USD</h1>
              </div>

              <h5 className="mb-3 fw-bold">Breakdown:</h5>
              <ul className="list-group list-group-flush mb-4 rounded-3 border">
                {selectedTier && (
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                    <div>
                      <strong>{selectedTier.name}</strong>
                      <span className="d-block small text-muted">Base Package</span>
                    </div>
                    <span className="fw-bold">${selectedTier.price}</span>
                  </li>
                )}
                {addons.map((addon) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={addon.id}>
                    <span>{addon.name}</span>
                    <span className="text-muted">+${addon.price}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <label htmlFor="contactEmail" className="form-label fw-bold">
                  Where should we send this quote?
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg bg-light"
                  id="contactEmail"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}

          {/* Controls */}
          <div className="d-flex justify-content-between mt-5 pt-4 border-top">
            {step > 1 ? (
              <button type="button" className="btn btn-light border" onClick={handleBack}>
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <button type="button" className="btn btn-primary px-5" onClick={handleNext}>
                Next Step
              </button>
            ) : (
              <button type="submit" className="btn btn-success px-5" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="fa-spin me-2" /> Sending...
                  </>
                ) : (
                  'Send Quote'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteCalculator;
