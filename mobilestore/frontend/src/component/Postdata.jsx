import React, { useState } from 'react';
import axios from 'axios'

const Postdata = () => {
  const [formData, setFormData] = useState({
    name: '',
    caption: '',
    price: '',
    ram: '',
    rom: '',
    image: '',
  });

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors

    const { name, caption, price, ram, rom, image } = formData;

    try {
      const response = await axios.post('http://localhost:4000/addmobiledata', {
        name,
        caption,
        price,
        ram,
        rom,
        image,
      });

      alert('Mobile data added successfully!');
      console.log(response);
      setFormData(
        {
          name: '',
          caption: '',
          price: '',
          ram: '',
          rom: '',
          image: '',
        }
      )
    } catch (error) {
      setError('Error: ' + error.message);
    } finally {
      setLoading(false); // Stop loading after request
    }
  };

  return (
    <div className="mx-auto mt-10 w-[600px] p-6 border border-gray-300 bg-slate-600 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">Add Mobile Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="caption" className="block text-sm font-medium text-gray-300">Caption</label>
          <input
            type="text"
            name="caption"
            id="caption"
            value={formData.caption}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-300">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="ram" className="block text-sm font-medium text-gray-300">RAM</label>
          <input
            type="text"
            name="ram"
            id="ram"
            value={formData.ram}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="rom" className="block text-sm font-medium text-gray-300">ROM</label>
          <input
            type="text"
            name="rom"
            id="rom"
            value={formData.rom}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-300">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 px-4 py-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          {loading ? 'Adding Mobile...' : 'Add Mobile'}
        </button>
      </form>
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </div>
  );
};

export default Postdata;
