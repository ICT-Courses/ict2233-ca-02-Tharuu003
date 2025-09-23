import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-black text-silver">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10 text-green-600">Get In Touch</h2>
                
                {/* Email Address */}
                <a href="mailto:nethminikodithuwakku12@gmail.com" className="flex items-center justify-center space-x-2 text-xl text-silver hover:text-green-600 transition-colors mb-4">
                    <FaEnvelope className="text-2xl" />
                    <span>nethminikodithuwakku12@gmail.com</span>
                </a>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/tharushi-kodithuwakku-bb5432316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-4xl text-silver hover:text-green-600 transition-colors">
                        <FaLinkedin />
                    </a>
                    
                    {/* GitHub */}
                    <a href="https://github.com/Tharuu003" target="_blank" rel="noopener noreferrer" className="text-4xl text-silver hover:text-green-600 transition-colors">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;