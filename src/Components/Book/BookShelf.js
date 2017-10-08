import React from "react";
import "./../../App.css";
import BooksGrid from "./BooksGrid";

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={props.books} />
      </div>
    </div>
  );
};

export default BookShelf;
