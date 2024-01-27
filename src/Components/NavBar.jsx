

function NavBar() {
    return(

        <nav className="nav">
            <h1 className="title">Plan of Life</h1>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/library">Library</a>
                </li>
                <li>
                    <a href="/health">Health</a>
                </li>
                <li>
                    <a href="/health">Work</a>
                </li>
                <li>
                    <a href="spiritual">Spiritual</a>
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;