import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
   <>
    <MovieCard movie={{title: "Test film", releaseDate: "2025"}}/>
    <MovieCard movie={{title: "Test film 2", releaseDate: "2026"}}/>
   </>
  )
}

export default App
