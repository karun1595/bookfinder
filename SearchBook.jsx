import React from "react";
import "./App.css";

function SearchBook({ books }) {
  if (!books || books.length === 0) {
     return <p>No books found</p>;
  }

  return (
    <div className="book-list">
      {books.map((item) => {
        const info = item.volumeInfo;
        return (
          <div key={item.id} className="book-card">
            <h3>{info.title}</h3>
            <p>{info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
            {info.imageLinks?.thumbnail && (
              <img src={info.imageLinks.thumbnail} alt={info.title} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SearchBook;
