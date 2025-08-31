import React from "react";
import "./BookCard.css"; 

function SearchBook({ books,loader }) {
  if(loader){
  return  <div className="loader">loading</div>
  }
  //kjgjhfgjkklbji
  
  if (!books || books.length === 0) {
    return <p>No books found</p>;
  }

  return (
    <div className="book-list">
      {books.map((item) => {
        const info = item.volumeInfo;
        return (
          <div key={item.id} className="book-card">
            {info.imageLinks?.thumbnail && (
              <img src={info.imageLinks.thumbnail} alt={info.title} />
            )}
            <h3>{info.title}</h3>
            <p>{info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBook;

