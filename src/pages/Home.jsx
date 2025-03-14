import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/apiHandler";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const moviesData = await getPopularMovies();
        setMovies(moviesData);
      } catch(err) {
        setError("Failed to load...", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [])

  async function handleSearch(e) {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search...")
    } finally {
      setLoading(false);
    }
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
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
      }
    </div>
  )
}

