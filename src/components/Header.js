import "./Header.css";

export default function Header({movieCount}) {
    const message = movieCount === 0
        ? "New movie shooting now and will arrive soon...."
        : `Number of movies: ${movieCount}`;
    return (
        <header className="Header">
            <h1>🍿 Popcorn time! 🍿</h1>
            <h2>🎥 {message}<span className="mirror">🎥</span></h2>
        </header>
    )
}