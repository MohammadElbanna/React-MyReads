import React from "react";
import { BOOK_SHELVES } from "./../../constants";
import "./../../App.css";

const BookShelvesSelection = props => {
  return (
    <div className="book-shelf-changer">
      <select value={props.selectedShelf} readOnly>
        <option value="disabled" disabled>
          Move to...
        </option>
        {Object.keys(BOOK_SHELVES).map((shelfKey, index) => (
          <option key={index} value={shelfKey} data-bookid={props.bookId}>
            {BOOK_SHELVES[shelfKey]}
          </option>
        ))}
        <option value="none" data-bookid={props.bookId}>
          None
        </option>
      </select>
    </div>
  );
};

export default BookShelvesSelection;
