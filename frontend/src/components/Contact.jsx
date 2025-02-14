import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const contactRef = useRef(null);

  useEffect(() => {
    // Add scroll animation to contact section
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        {
          opacity: 0,
          y: 100, // Start 100 pixels below original position
          scale: 0.9 // Slightly scaled down
        },
        {
          opacity: 1,
          y: 0, // Return to original position
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%", // Animation starts when top of contact section enters 80% of viewport
            toggleActions: "play none none reverse" // Play forward when entering, reverse when leaving
          }
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to a backend service
      alert('Form submitted successfully!');
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div id="contact" ref={contactRef} className="py-24 px-4 opacity-0">
      <div className="max-w-md mx-auto p-8 bg-neutral-900 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact <span className="text-neutral-500"> Me </span></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-neutral-800 text-white 
                ${errors.name ? 'border-2 border-red-500' : 'border border-neutral-700'}`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-neutral-800 text-white 
                ${errors.email ? 'border-2 border-red-500' : 'border border-neutral-700'}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full p-3 rounded-lg bg-neutral-800 text-white 
                ${errors.message ? 'border-2 border-red-500' : 'border border-neutral-700'}`}
              placeholder="Your Message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg 
              hover:bg-purple-700 transition-colors duration-300 
              flex items-center justify-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;