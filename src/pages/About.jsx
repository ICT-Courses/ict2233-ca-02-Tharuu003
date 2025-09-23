import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-silver">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              I am a passionate and dedicated software developer with a background in information technology. My journey in the tech world began with a curiosity for solving complex problems and a desire to build things that can make a real-world impact.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in creating dynamic and responsive web applications using modern technologies. I love learning new things and continuously improving my skills to stay on top of the latest trends in the industry.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="https://placehold.co/400x400/1e293b/d1d5db?text=Your+Photo" alt="Tharushi Kodithuwakku" className="rounded-full shadow-lg border-4 border-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
