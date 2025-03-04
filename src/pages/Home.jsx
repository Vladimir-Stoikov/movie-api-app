import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getMoviesList } from "../services/apiHandler";

const URLS = {
  oneplusone: "https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/caf9f155-1a19-42f1-a0f3-9c8773e9083e/72x108",
  interstellar: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/72x108",
  theShawshankRedemption: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/72x108"
}

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  const moviesList = [
    { id: 1, url: URLS.oneplusone, title: "1+1", releaseDate: "2011" },
    { id: 2, url: URLS.interstellar, title: "Interstellar", releaseDate: "2014" },
    { id: 3, url: URLS.theShawshankRedemption, title: "The Shawshank Redemption", releaseDate: "1994" },
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const moviesData = await getMoviesList();
        setMovies(moviesData.items);
      } catch(err) {
        setError("Failed to load...", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [])

  console.log(movies);

  function handleSearch(e) {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
  }

  
  return (
    <div className="home">
      <form className="search-form" onSubmit={event => handleSearch(event)}>
        <input className="search-input" type="text" placeholder="Search for movies..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? <div className="loading">Loading...</div> : 

      <div className="movies-grid">
        {movies.map(movie => (
          movie.nameRu && movie.nameRu.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.kinopoiskId} movie={{id: movie.kinopoiskId, url: movie.posterUrl, title: movie.nameRu, releaseDate: movie.year}}/>
          // <div>{movie.nameRu}</div>
        ))}
      </div>
      }
    </div>
  )
}

