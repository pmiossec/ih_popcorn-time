export default function Movie({id, title, imgURL, rating, deleteMovie}) {
    return <div className="card">
                <p>{title}</p>
                <img src={imgURL} alt={title} />
                <p>{'⭐'.repeat(rating)}<span className="black-star">{'⭐'.repeat(10-rating)}</span></p>
                <button onClick={() => deleteMovie(id)}>Delete this movie</button>
            </div>
}