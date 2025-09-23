// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Project One', 
      description: 'A brief description of project one. It highlights the technologies used and the problem it solves.',
      repoLink: 'https://github.com/your-username/project-one'
    },
    { 
      id: 2, 
      title: 'Project Two', 
      description: 'A brief description of project two. It demonstrates my skills in building scalable applications.',
      repoLink: 'https://github.com/your-username/project-two'
    },
    { 
      id: 3, 
      title: 'Project Three', 
      description: 'A brief description of project three. This project was a collaborative effort to build a creative solution.',
      repoLink: 'https://github.com/your-username/project-three'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black text-silver min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg p-6 shadow-xl border border-green-600">
              <h3 className="text-2xl font-semibold mb-2 text-green-400">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-green-600 text-black font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;