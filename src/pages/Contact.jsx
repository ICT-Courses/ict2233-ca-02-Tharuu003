import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import React, { useState } from 'react'; 

const Contact = () => {

    // add the validation logic and state hooks 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) {
            formErrors.name = "Name is required";
        }
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!formData.message) {
            formErrors.message = "Message is required";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data submitted successfully:", formData);
            
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Reset the form
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-black text-silver">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10 text-green-600">Get In Touch</h2>
                
                <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 mb-8 max-w-lg mx-auto">
                    {isSubmitted ? (
                        <div className="text-center text-green-500 font-semibold">
                            <p>Thank you for your message! I will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                                ></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>

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