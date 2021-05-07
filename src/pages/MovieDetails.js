import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.scss";

export default function MovieDetails() {
  const [fullMovie, setFullMovie] = useState(null);
  const routeParams = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://omdbapi.com/?i=${routeParams.movieId}&apikey=88ce607b`
        );
        console.log(response.data);
        setFullMovie(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovie();
  }, [routeParams.movieId]);

  if (!fullMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MovieDetails">
      <>
        {" "}
        <h2>{fullMovie.Title}</h2>
        <div>
          {fullMovie.Genre.split(", ").map((genre, index) => (
            <span key={index} className="genre">
              {genre}
            </span>
          ))}
        </div>
        <div className="details">
          <img alt={fullMovie.Title} src={fullMovie.Poster} />
          <div>
            <h3>Director</h3>
            <p>{fullMovie.Director}</p>
            <h3>Language</h3>
            <p>{fullMovie.Language}</p>
            <h3>Plot</h3>
            <p>{fullMovie.Plot}</p>
            <h3>IMDB Rating</h3>
            <p>{fullMovie.imdbRating}</p>
            <h3>Actors</h3>
            <p>{fullMovie.Actors}</p>
          </div>
        </div>
      </>
    </div>
  );
}
