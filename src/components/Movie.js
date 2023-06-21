export default function Movie({id, title, imgURL, year, genres, rating, deleteMovie}) {
    const imageUrl = imgURL ?? "https://placehold.co/300x440?text=No+poster+available";
    return <div className="card">
                <h1>{title} ({year})</h1>
                <img src={imageUrl} alt={title} />
                <p>Genre: {genres.join(", ")}</p>
                <p>{'⭐'.repeat(rating)}<span className="black-star">{'⭐'.repeat(10-rating)}</span></p>
                <button onClick={() => deleteMovie(id)}>Delete this movie</button>
            </div>
}