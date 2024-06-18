import { useState, useEffect } from "react";
import Container from "./container.jsx";
import "./main.css";

const api = "https://www.omdbapi.com/?apikey=30b94e0f&s=";

export default function Main() {
  const [searchdata, setSearchdata] = useState("");
  const [setmovie, setMovies] = useState([]);

  useEffect(() => {
    search("john wick");
  }, []);

  async function search(title) {
    const response = await fetch(api + title);
    const data = await response.json();
    setMovies(data.Search || []);
  }

  function handleClick() {
    search(searchdata);
  }

  return (
    <div>
      <div className="textarea">
        <input
          value={searchdata}
          onChange={(e) => setSearchdata(e.target.value)}
          placeholder="Search for setmovie"
          type="text" 
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {setmovie.length > 0 ? (
        <div className="movie-list">
          {setmovie.map((movie) => (
            <Container key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No setmovie found</h2>
        </div>
      )}
    </div>
  );
}
