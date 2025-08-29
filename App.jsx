import { useState } from "react";
import SearchBook from "./Components/SearchBook";
import axios from "axios";
import "./App.css";

const apikey = "AIzaSyCP9zGq-ojQhKJmhvcOhnd8sTk4AIp6I7w";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  const handlechange = (e) => {
    setBook(e.target.value);
  };

  const searchBook = async (query) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apikey}`
      );
      setResult(res.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim()) {
      searchBook(book);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book}
          onChange={handlechange}
          placeholder="type here"
        />
        <button type="submit">search</button>
      </form>

      
      {result.map((item) => (
        <div key={item.id}>
          <h3>{item.volumeInfo.title}</h3>
          <p>{item.volumeInfo.authors?.join(", ")}</p>
        </div>
      ))}

      <SearchBook />
    </>
  );
}

export default App;
