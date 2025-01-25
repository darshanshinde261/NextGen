import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="max-w-8xl mx-auto p-4 ">
      {movies.length === 0 ? (
        <div className="text-center text-xl font-semibold">No movies found</div>
      ) : (
        <div className=" flex bg-gray-400 p-4 gap-4 justify-center items-center flex-wrap">
          {movies.map((movie) => (
            <div key={movie?._id} className="text-white  p-4 shadow-lg w-[20%] flex bg-gray-500 flex-col justify-center rounded-md hover:scale-105 transition-all duration-200">
              <h3 className="text-xl font-bold text-center">{movie?.movieName}</h3>
              <img src={movie?.image} alt="img" className='w-full h-[350px] object-fit'/>
              <p><strong>Hero:</strong> {movie?.hero}</p>
              <p><strong>Heroin:</strong> {movie?.heroin}</p>
              <p><strong>Year:</strong> {movie?.year}</p>
              <p><strong>Rating:</strong> {movie?.rating}</p>
              <p><strong>Genere:</strong> {movie?.genere}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
