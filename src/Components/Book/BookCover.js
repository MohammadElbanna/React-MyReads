import React from "react";
import "./../../App.css";

const BookCover = props => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        backgroundImage: `url(${props.bookImgURL})`
      }}
    />
  );
};

export default BookCover;
