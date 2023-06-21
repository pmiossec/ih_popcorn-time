import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
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
      <Main movies={movies} deleteMovie={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
