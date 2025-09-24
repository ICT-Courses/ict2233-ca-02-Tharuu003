// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import demoVideo from '../assets/CA1_WEB_DEMO.mp4';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const GITHUB_USERNAME = 'Tharuu003';

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error("Failed to fetch repositories:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

    return (
        <section id="projects" className="py-20 px-4 min-h-screen">
            <div className="container mx-auto">
                
                {/* My Projects - GitHub */}
                <h2 className="text-4xl font-bold text-center mb-10 text-green-600">My Projects - GitHub</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-900 rounded-lg p-6 shadow-xl border border-green-600">
                            <h3 className="text-2xl font-semibold mb-2 text-green-400">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.description || 'No description provided.'}</p>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600/30 text-green-400 font-bold py-2 px-4 rounded-full transition-all hover:bg-green-600 hover:text-white">
                                Repo
                            </a>
                        </div>
                    ))}
                </div>

                {/* My Projects - Demo Videos */}
                <h2 className="text-4xl font-bold text-center mb-10 text-green-600">My Projects - Demo Videos</h2>
                <div className="flex flex-col items-center mb-20">
                    {/* CA1_WEB_DEMO.mp4 Video */}
                    <video controls className="w-full max-w-2xl rounded-lg border border-green-600 shadow-xl mb-6">
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                
                {/* My Projects - Demo Videos - YouTube */}
                <h2 className="text-4xl font-bold text-center mb-10 text-green-600">My Projects - Demo Videos - YouTube</h2>
                <div className="flex flex-col items-center">
                    <a href="https://youtu.be/M3fh2r3rvtU?si=gukFOY64qHuIy2Eo" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-500 underline text-xl hover:text-blue-400 transition-colors">
                        Click here to watch on YouTube
                    </a>
                    <a href="https://youtu.be/qeiYIpsv600?si=4BIWXVW0WOgoTRA_" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-500 underline text-xl hover:text-blue-400 transition-colors">
                        Click here to watch on YouTube
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;