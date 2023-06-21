import Movie from './Movie';
import './Main.css';


export default function Main({movies, deleteMovie}) {
    return (
        <div className="Main">
            { movies.map(m => <Movie key={m.id} {...m} deleteMovie={deleteMovie} /> )}
        </div>
    )
}