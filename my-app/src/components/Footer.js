
// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center text-sm text-gray-700 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} Adarsh Pandey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
