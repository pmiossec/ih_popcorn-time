import { useState } from 'react';
import allMovies from '../data/movies.json'
import './Main.css';


export default function Main() {

    const [movies, updateMovies ] = useState(allMovies);
    const deleteMovie = id => {
        updateMovies(movies.filter(m => m.id !== id));
    }

    return (
        <div className="Main">
            { movies.map(m => <div key={m.id} className="card">
            <p>{m.title}</p>
                <button onClick={() => deleteMovie(m.id)}>Delete this movie</button>
            </div>)}
        </div>
    )
}