import "./Header.css";

export default function Header({movieCount}) {
    return (
        <header className="Header">
            <h1>🍿 Popcorn time! 🍿</h1>
            <h2>🎥 Number of movies: {movieCount}<span className="mirror">🎥</span></h2>
        </header>
    )
}