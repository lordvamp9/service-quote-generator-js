import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} ClearQuote by vamp9. All rights reserved.</p>
        <p className="small text-muted mb-0">
          Built with <FaHeart className="text-danger mx-1" /> and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
