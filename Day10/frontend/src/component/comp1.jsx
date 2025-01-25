import React, { useState } from 'react';

const MovieForm = () => {
  const [movieName, setMovieName] = useState('');
  const [hero, setHero] = useState('');
  const [heroin, setHeroin] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [genere, setGenere] = useState('');
  const [movieURL,setMovieURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      movieName,
      hero,
      heroin,
      year: parseInt(year, 10),
      rating: parseFloat(rating),
      genere,
      image:movieURL,
    };

    try {
      const response = await fetch('http://localhost:4000/addmoviedata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert('Movie data added successfully!');
          setMovieName('');
          setHeroin('');
          setHero('');
          setGenere('')
          setMovieURL('')
          setYear('');
          setRating('')
            // Adding the newly added movie to the list in App component
        } else {
          alert('Failed to add movie data');
        }
      } else {
        alert('Failed to add movie data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error while submitting data');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 shadow-lg rounded-lg bg-gray-500">
      <h2 className="text-2xl font-bold mb-4 text-center text-slate-300">Add Movie Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="movieName" className="block text-sm font-semibold text-gray-700">Movie Name</label>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hero" className="block text-sm font-semibold text-gray-700">Hero</label>
          <input
            type="text"
            id="hero"
            value={hero}
            onChange={(e) => setHero(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="heroin" className="block text-sm font-semibold text-gray-700">Heroin</label>
          <input
            type="text"
            id="heroin"
            value={heroin}
            onChange={(e) => setHeroin(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-sm font-semibold text-gray-700">Year</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-semibold text-gray-700">Rating</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="genere" className="block text-sm font-semibold text-gray-700">Genere</label>
          <input
            type="text"
            id="genere"
            value={genere}
            onChange={(e) => setGenere(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="movieURL" className="block text-sm font-semibold text-gray-700">Movie url</label>
          <input
            type="text"
            id="movieURL"
            value={movieURL}
            onChange={(e) => setMovieURL(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
