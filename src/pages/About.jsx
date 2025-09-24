// src/pages/About.jsx
import React from 'react';
import myPhoto from '../assets/myPhoto.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-silver">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          {/* Text Description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              I am a highly motivated and versatile undergraduate student at the University of Sri Jayewardenepura, currently pursuing a B.Sc. Hons. in ICT. My academic journey has ignited a passion for various facets of the technology field, including UI/UX design, Project Management, and Full-stack Software Engineering.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My hands-on experience has allowed me to apply theoretical knowledge to real-world projects. I have a strong foundation in C# and the .NET framework, demonstrated by my work on two comprehensive desktop applications. One was a Salon Management System designed to streamline daily operations for staff and owners through dedicated login portals for various roles, like appointment and inventory managers.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              In a collaborative group project, I took on a multifaceted role as Project Manager, Business Analyst, and Developer for SilkShield, a digital invoice management system for a company specializing in curtains and blinds. I was specifically responsible for developing the core invoice generation feature, which automated calculations and enabled PDF exports to enhance business efficiency.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond desktop applications, I have expanded my skills into modern web development, creating a front-end educational website using React and Vite, as well as a 2D web game. My diverse project portfolio reflects my eagerness to explore various technologies and my commitment to developing practical, user-focused solutions across different domains. I am enthusiastic about the opportunities the ICT field offers and am ready to contribute to innovative projects.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/3">
            <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto transform transition-transform duration-300 hover:scale-105 shadow-xl border-4 border-green-600">
                <img
                    src={myPhoto}
                    alt="Tharushi Kodithuwakku"
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;