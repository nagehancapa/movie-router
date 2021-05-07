import { Link } from "react-router-dom";

export default function MovieCard(props) {
  console.log(props);
  const { Poster, Title, imdbID } = props.movie;

  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Link to={`/movies/${imdbID}`}>
        <strong>{Title}</strong>
      </Link>
      <img
        src={Poster}
        alt={Title}
        style={{
          display: "block",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}
