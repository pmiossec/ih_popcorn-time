export default function Movie({id, title, imgURL, deleteMovie}) {
    return <div key={id} className="card">
                <p>{title}</p>
                <img src={imgURL} alt={title} />
                <button onClick={() => deleteMovie(id)}>Delete this movie</button>
            </div>
}