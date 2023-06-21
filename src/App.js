import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AddMovie from './components/AddMovie';
import './App.css';

import allMovies from './data/movies.json'


function App() {
  const [movies, updateMovies ] = useState(allMovies);

  const deleteMovie = id => {
    updateMovies(movies.filter(m => m.id !== id));
  }


  return (
    <div className="App">
      <Header movieCount={movies.length} />

      {/* https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg */}
      <AddMovie updateMovies={updateMovies} />


      <Main movies={movies} deleteMovie={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
