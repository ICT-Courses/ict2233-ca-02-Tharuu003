import React from 'react';
import myPhoto from '../assets/myPhoto.jpg';
import '../styles/About.css'; 

const About = () => {
  return (
            <section id="about" className="py-20 px-4 bg-black text-silver">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-10 text-green-600">About Me</h2>
                
                {/* Flexbox Layout - About Content*/}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* About me */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <p className="text-lg leading-relaxed mb-4 text-justify">
                            I am a highly motivated and versatile undergraduate student at the University of Sri Jayewardenepura, currently pursuing a B.Sc. Hons. in ICT. My academic journey has ignited a passion for various facets of the technology field, including UI/UX design, Project Management, and Full-stack Software Engineering.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-justify">
                            My hands-on experience has allowed me to apply theoretical knowledge to real-world projects. I have a strong foundation in C# and the .NET framework, demonstrated by my work on two comprehensive desktop applications. One was a Salon Management System designed to streamline daily operations for staff and owners through dedicated login portals for various roles, like appointment and inventory managers.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-justify">
                            In a collaborative group project, I took on a multifaceted role as Project Manager, Business Analyst, and Developer for SilkShield, a digital invoice management system for a company specializing in curtains and blinds. I was specifically responsible for developing the core invoice generation feature, which automated calculations and enabled PDF exports to enhance business efficiency.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-justify">
                            Beyond my technical skills, I possess strong soft skills that are crucial for project success, including effective communication, problem-solving and the ability to collaborate seamlessly in a team environment. These skills were vital in my role as a project manager, ensuring clear communication between team members and stakeholders.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-justify">
                            My diverse project portfolio reflects my eagerness to explore various technologies and my commitment to developing practical, user-focused solutions across different domains. I am enthusiastic about the opportunities the ICT field offers and am ready to contribute to innovative projects.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center relative"> 
                        <img 
                            src={myPhoto}
                            alt="Tharushi Kodithuwakku" 
                            // rounded-full ඉවත් කර, h-auto සහ w-full යොදා හතරැස් හැඩය පවත්වා ගැනීමට
                            className="w-56 h-auto md:w-80 md:h-auto object-cover glass-effect photo-glow photo-zoom" 
                        />
                    </div>

                </div>

                {/* Skills Section - CSS Grid Layout */}
                <h2 className="text-4xl font-bold text-center mb-10 text-green-600 dark:text-green-400 mt-20">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-2xl">
                    {/* The section that demonstrates technical skills */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg dark:bg-gray-800">
                        <h3 className="text-xl font-semibold text-green-500 dark:text-green-400 mb-2">Technical Skills</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                            <li>C# / .NET Framework</li>
                            <li>React.js & Vite</li>
                            <li>UI/UX Design / Figma</li>
                            <li>Web Development (HTML, CSS, JavaScript)</li>
                            <li>Database Management (SQLite, MySQL, pgAdmin4)</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>
                    {/* The section that demonstrates soft skills */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg dark:bg-gray-800">
                        <h3 className="text-xl font-semibold text-green-500 dark:text-green-400 mb-2">Soft Skills</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                            <li>Project Management</li>
                            <li>Business Analysis</li>
                            <li>Effective Communication</li>
                            <li>Problem-Solving</li>
                            <li>Teamwork & Collaboration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;