import React, { useState } from "react";

import { getMovies } from "./services/fakeMovieService";

export default function Movies() {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (id) =>
    setMovies(movies.filter((movie) => movie._id !== id));

  if (movies.length === 0) return <h2>There is no movies in the DataBase</h2>;
  return (
    <div>
      <span> Showing {movies.length} movies in the database</span>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
