import { useState } from "react";
import MovieCard from "../components/MovieCard"

const URLS = {
  oneplusone: "https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/caf9f155-1a19-42f1-a0f3-9c8773e9083e/72x108",
  interstellar: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/72x108",
  theShawshankRedemption: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/72x108"
}

export default function Home() {

  const [searchQuery, setSearchQuery] = useState(""); 

  const moviesList = [
    { id: 1, url: URLS.oneplusone, title: "1+1", releaseDate: "2011" },
    { id: 2, url: URLS.interstellar, title: "Interstellar", releaseDate: "2014" },
    { id: 3, url: URLS.theShawshankRedemption, title: "The Shawshank Redemption", releaseDate: "1994" },
  ];

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
      <div className="movies-grid">
        {moviesList.map(movie => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}
