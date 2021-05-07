import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function DiscoverMoviesPage() {
  const history = useHistory();
  const { searchtext } = useParams();
  const [searchText, setSearchText] = useState(searchtext);
  const [state, setState] = useState({ status: "idle" });

  useEffect(() => {
    const fetchData = async () => {
      if (!searchtext || searchtext === "") {
        setState({ status: "idle" });
        return;
      }
      setState({ status: "searching" });
      const queryParam = encodeURIComponent(searchtext);
      const response = await axios.get(
        `https://omdbapi.com/?s=${queryParam}&apikey=88ce607b`
      );
      if (response.data.Error) {
        setState({ status: "error" });
      } else {
        setState({ status: "done", data: response.data.Search });
      }
    };
    fetchData();
  }, [searchtext]);

  const OnFormSubmit = (event) => {
    event.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <form onSubmit={OnFormSubmit}>
        <label>Search Term:</label>
        <input
          type="text"
          value={searchtext}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {state.status === "idle" && (
          <p>Type in a search term and click "Search" to start...</p>
        )}
        {state.status === "searching" && <p>Searching...</p>}
        {state.status === "done" && (
          <div>
            {state.data && state.data.length > 0 ? (
              <>
                <h2>Search results</h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "0 -10px",
                  }}
                >
                  {state.data.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              </>
            ) : (
              <h2>No results!</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
