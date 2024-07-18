import React, { useState } from 'react';
import logoRebel from '../public/logo.png';
import Image from 'next/image';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Email enviado correctamente');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error al enviar el email');
    }
  };

  return (
    <>
      <Image src={logoRebel} alt="Logo" className="mx-auto w-3/6 md:w-2/4 mt-16 md:block hidden" />
      <section className="w-full p-4 md:p-12 md:mb-96">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-yellow-300 mb-8">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-yellow-300">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="text-black  mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-yellow-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-300">Mensaje</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={4}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacto;
