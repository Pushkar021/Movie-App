import { useState, useEffect } from "react";
import Container from "./container.jsx";
import "./main.css";
import image from "./9264822.jpg";


const api = "https://www.omdbapi.com/?apikey=30b94e0f&s=";

export default function Main() {
  const [searchdata, setSearchdata] = useState("");
  const [setmovie, setMovies] = useState([]);

  useEffect(() => {
    search("fast");
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
          placeholder="Search for movie/series"
          type="text"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {setmovie.length != 0 ? (
        <div className="movie-list">
          {setmovie.map((movie) => (
            <Container key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie/series found</h2>
          <img  className="img" src={image} alt="img" />
        </div>
      )}
    </div>
  );
}
