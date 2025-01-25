import React, { useState } from 'react';
import MovieForm from './component/comp1';
import MovieList from './component/comp2';

const App = () => {
  const [movies, setMovies] = useState([]);
  const handleClick = async () => {
    try {
      console.log("movie set")
      const response = await fetch('http://localhost:4000/getmoviedata');
      const data = await response.json();
      if (data.success) {
        setMovies(data.newdata);
      } else {
        console.error('Failed to fetch movie data');
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  
  

  return (
    <div className="bg-gray-400 pt-4">
      <MovieForm  />
      <button onClick={handleClick} className='bg-red-700 rounded-md my-4 text-center flex mx-auto p-2 text-white px-3 shadow-lg shadow-black hover:bg-red-600 transition-all duration-200'>Get Movies</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
