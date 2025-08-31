import { useState } from "react";
import SearchBook from "./Components/SearchBook";
import axios from "axios";
 import "./App.css";

const apikey = "AIzaSyCP9zGq-ojQhKJmhvcOhnd8sTk4AIp6I7w";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const[error,setError]=useState("");             
  const [loading, setLoading] = useState(false);
  
  const handlechange = (e) => {
    setBook(e.target.value);
  setError("");
  
  };

  const searchBook = async (query) => {
  
  setLoading(true);
   
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apikey}`
      );
      
       setResult(res.data.items || []);
    } 
    catch (error){
  
  }
  finally {
    setLoading(false);
  }

};

  const handleSubmit = (e) => {
    e.preventDefault();
    
     const regex = /^[a-zA-Z0-9\s]+$/;
    if (!book.trim()) {
        setError("please enter a book name");
        } else if (!regex.test(book)) {
      setError("Please enter a title or author name");
    } else {
      setError("");
      searchBook(book);
    
    }
      
      
      
    }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book}
          onChange={handlechange}
          placeholder="type here"
        />
        <button type="submit" >search</button>
      
      
      </form>

       {error && <p className="error">{error}</p>}
      
   <SearchBook books={result} loader={loading} />
  
    </>
  );
}

export default App;