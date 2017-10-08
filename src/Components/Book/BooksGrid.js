import React from "react";
import "./../../App.css";
import Book from "./../Book/Book";

const BooksGrid = props => {
  return (
    <ol className="books-grid">
      {!props.books && <li>loading ...</li>}
      {props.books &&
        props.books.length === 0 && <li> No books to be shown</li>}
      {props.books &&
        props.books.length > 0 &&
        props.books.map(book => <Book key={book.id} book={book} />)}
    </ol>
  );
};

export default BooksGrid;
