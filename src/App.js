import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
