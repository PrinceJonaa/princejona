
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submission is a placeholder.');
    };

  return (
    <div className="container mx-auto py-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-4">Contact</h1>
      <p className="text-center text-gray-400 mb-8">
        For business inquiries, please visit <a href="#" className="text-accent-gold underline">intervised.com</a>.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-emerald focus:border-accent-emerald"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-emerald focus:border-accent-emerald"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea 
            name="message" 
            id="message" 
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-emerald focus:border-accent-emerald"
          ></textarea>
        </div>
        <div>
            <button type="submit" className="w-full px-6 py-3 bg-accent-emerald text-surface-bg font-bold rounded-md hover:bg-emerald-500 transition-colors">
                Send Message
            </button>
        </div>
      </form>
       <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Booking / Tap-to-Pay</h3>
            <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Integration Placeholder</p>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
