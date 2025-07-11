// src/pages/Contact.js
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// Contact page with links and basic layout
const Contact = () => {
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-8">Feel free to reach out via any of the platforms below:</p>

      <div className="flex flex-col items-center space-y-6">
        <a
          href="mailto:adarshsomeshwaralok@gmail.com"
          className="flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <FaEnvelope />
          <span>adarshsomeshwaralok@gmail.com</span>
        </a>

        <a
          href="https://github.com/tadarshpandey"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-800 dark:text-gray-300 hover:underline"
        >
          <FaGithub />
          <span>tadarshpandey</span>
        </a>

        <a
          href="https://www.linkedin.com/in/adarsh-pandey-41b92126b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-700 hover:underline"
        >
          <FaLinkedin />
          <span>Adarsh Pandey</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
