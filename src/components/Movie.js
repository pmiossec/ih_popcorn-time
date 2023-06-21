export default function Movie({id, title, deleteMovie}) {
    return <div key={id} className="card">
                <p>{title}</p>
                <button onClick={() => deleteMovie(id)}>Delete this movie</button>
            </div>
}