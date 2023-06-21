import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

import allMovies from './data/movies.json'


function App() {
  const [movies, updateMovies ] = useState(allMovies);
  const [title, setTitle ] = useState("");
  const [imgURL, setImgURL ] = useState("");
  const [rating, setRating ] = useState(0);

  const deleteMovie = id => {
    updateMovies(movies.filter(m => m.id !== id));
  }

  const handleFormSubmit = (event) => {
    console.log("event", event);
    event.preventDefault();
    const newMovie =    {
      id: 42,
      title: title,
      year: 1972,
      genres: ["Crime", "Drama"],
      imgURL: imgURL?? "https://placehold.co/300x440?text=" + title,
      rating: rating
  };
    updateMovies([newMovie, ...movies]);
    setTitle("");
  }

  return (
    <div className="App">
      <Header movieCount={movies.length} />

      {/* https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg */}

      <form onSubmit={handleFormSubmit}>

        <label>
          Title:
          <input type="text" name="title" placeholder='Enter movie title...'
           value={title} onChange={e => setTitle(e.target.value)} required />
        </label>

        <label>
          Image URL:
          <input type="text" name="imgURL" placeholder='Enter movie image url...'
           value={imgURL} onChange={e => setImgURL(e.target.value)} />
        </label>
        
        <label>
          Rating:
          <input type="number" name="rating" placeholder='Enter movie rating...'
           value={rating} onChange={e => setRating(e.target.value)} min={0} max={10} required />
        </label>
        <button type="submit">Add a movie</button>
      </form>


      <Main movies={movies} deleteMovie={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
