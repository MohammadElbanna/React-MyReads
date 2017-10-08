import React from "react";
import "./../../App.css";

const BookAuthors = props => {
  return (
    <div className="book-authors">
      {props.authors &&
        props.authors.map((author, index) => (
          <span key={index}>
            {author}
            <br />
          </span>
        ))}
    </div>
  );
};

export default BookAuthors;
