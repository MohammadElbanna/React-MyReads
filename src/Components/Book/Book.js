import React, { Component } from "react";
import BookTitle from "./BookTitle";
import BookCover from "./BookCover";
import BookShelvesSelection from "./BookShelvesSelection";
import BookAuthors from "./BookAuthors";
import "./../../App.css";

class Book extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <BookCover bookImgURL={this.props.book.imageLinks.thumbnail} />
            <BookShelvesSelection
              bookId={this.props.book.id}
              selectedShelf={
                this.props.book.shelf ? this.props.book.shelf : "none"
              }
            />
          </div>
          <BookTitle title={this.props.book.title} />
          <BookAuthors authors={this.props.book.authors} />
        </div>
      </li>
    );
  }
}

export default Book;
