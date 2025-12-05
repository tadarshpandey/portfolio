// src/pages/About.js
import React from 'react';

// About page with bio, education, and soft skills
const About = () => {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

      {/* Bio */}
      <p className="text-lg mb-6">
        I’m a Backend Developer. Code in Python programming language. Knows basic SQL.
      </p>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>M.C.A</strong>, BBS College of Engineering & Technology, Prayagraj (2025 – 2027) – pursuing</li>
          <li><strong>B.C.A</strong>, Shambhunath College of Education, Prayagraj (2022 – 2025) – 77.52%</li>
          <li><strong>12th (PCM)</strong>, Urmila Devi Inter College (2022) – 66.4%</li>
          <li><strong>10th (Science)</strong>, Dawn The Higher Secondary School (2020) – 66.6%</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Communication</li>
          <li>Team Co-ordination</li>
          <li>Problem Solving</li>
          <li>Teamwork</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
