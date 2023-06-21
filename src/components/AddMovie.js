import { useState } from 'react';
const allGenres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Family", "Fantasy", "Romance", "Sci-Fi", "War"]

export default function AddMovie({updateMovies}) {

    const [title, setTitle ] = useState("");
    const [imgURL, setImgURL ] = useState("");
    const [rating, setRating ] = useState(0);
    const [year, setYear ] = useState("");
    const [genres, setGenres ] = useState([]);
  
    const toggleGenres = (genre) => {
      if (genres.includes(genre)) {
        setGenres(genres.filter(g => g !== genre));
      }
      else {
        setGenres([genre, ...genres]);
      }
    }
    
    const handleFormSubmit = (event) => {
      console.log("event", event);
      event.preventDefault();
      const newMovie =    {
        id: new Date().getMilliseconds(),
        title: title,
        year: year,
        genres: genres,
        imgURL: imgURL || "https://placehold.co/300x440?text=" + title,
        rating: rating
      };

        updateMovies(movies => [newMovie, ...movies]);
        setTitle("");
        setImgURL("");
        setRating(0);
        setYear("");
        setGenres([]);
    }

    return (      <section>
        <form onSubmit={handleFormSubmit}>

          <label>
            Title:
            <input type="text" name="title" placeholder='Enter movie title...'
            value={title} onChange={e => setTitle(e.target.value)} required />
          </label>

          <label>
            Year:
            <input type="number" name="year" placeholder='Enter movie year...'
            value={year} onChange={e => setYear(e.target.value)} min={1900} max={2030}  required />
          </label>
          
          <label>
            Image URL:
            <input type="text" name="imgURL" placeholder='Enter movie image url...'
            value={imgURL} onChange={e => setImgURL(e.target.value)} />
          </label>
          
        { allGenres.map(g => <label key={g} >{g}
          <input type="checkbox" name="genre" value={g} onChange={e => toggleGenres(e.target.value)} />
        </label> )}

          <label>
            Rating:
            <input type="number" name="rating" placeholder='Enter movie rating...'
            value={rating} onChange={e => setRating(e.target.value)} min={0} max={10} required />
          </label>
          <button type="submit">Add a movie</button>
        </form>
      </section>);
}