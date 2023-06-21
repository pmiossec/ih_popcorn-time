import { useState } from 'react';
import allMovies from '../data/movies.json'
import Movie from './Movie';
import './Main.css';


export default function Main() {

    const [movies, updateMovies ] = useState(allMovies);
    const deleteMovie = id => {
        updateMovies(movies.filter(m => m.id !== id));
    }

    return (
        <div className="Main">
            { movies.map(m => <Movie  key={m.id} {...m} deleteMovie={deleteMovie} /> )}
        </div>
    )
}