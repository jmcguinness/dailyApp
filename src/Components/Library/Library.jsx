import { useEffect, useState } from "react"

const Library = () => {

const url = `https://openlibrary.org/search.json?title=the+lord+of+the+rings`

    const [search, setSearch] = useState("");
    const [book, setBook] = useState("East of Eden")
    const [author, setAuthor] = useState("John Steinbeck");
    {/*const [date, setDate] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = 'OL23166W'*/}

    useEffect(() => {
        bookSearch();
    }, [])


    const bookSearch = async () => {
        const data = await fetch(url);
        const results = await data.json();
        console.log(results);
    }
    

    return(
        <>
        <div className="homeContainer">

            <div className="leftContainer"></div>

            <div className="centerContainer">
                <div className="bookForm">
                    <form>
                        <div className="book-search">
                            <label className="bookLabel">Book</label>
                            <input type="search" 
                            placeholder="Book Name" 
                            className="search-bar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}/>
                            <button type="submit" className="search-button" onClick={bookSearch}>Add Book</button>
                        </div>
                    </form>
                </div>
                <div className="centerContainer">
                    <h2 className="bookHeading">Current Reading</h2>
                    <div className="bookContainer">
                        <div className="currentBook">
                            <div>
                                <span>{book}</span>
                                <span>{author}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="centerContainer">
                    <h2 className="bookHeading">Previous Reading</h2>
                    <div className="bookContainer"></div>
                </div>
                
            </div>
            <div className="rightContainer"></div>
        </div>
        </>
    )
}

export default Library