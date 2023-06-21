export default function Movie({details, deleteMovie}) {
    return <div key={details.id} className="card">
            <p>{details.title}</p>
                <button onClick={() => deleteMovie(details.id)}>Delete this movie</button>
            </div>
}