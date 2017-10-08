import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./../BooksAPI";
import { BOOK_SHELVES } from "./../constants";
import BookShelf from "./../Components/Book/BookShelf";
import "./../App.css";

class MainPage extends React.Component {
  state = {
    allBooks: []
  };

  handleBookShelfChange = event => {
    if (event.target.nodeName.toLowerCase() === "select") {
      let optionElement = event.target.options[event.target.selectedIndex];
      let bookId = optionElement.dataset.bookid;
      let newShelfTitle = optionElement.value;
      BooksAPI.update({ id: bookId }, newShelfTitle);
      this.setState(prevState => {
        let newBookList = prevState.allBooks.map(book => {
          if (book.id === bookId) {
            book.shelf = newShelfTitle;
          }
          return book;
        });
        return { allBooks: newBookList };
      });
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ allBooks: books });
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{this.props.appName}</h1>
        </div>
        <div className="list-books-content">
          <div onChange={this.handleBookShelfChange}>
            {Object.keys(BOOK_SHELVES).map((shelfKey, index) => {
              let books =
                this.state.allBooks.length === 0
                  ? undefined
                  : this.state.allBooks.filter(book => book.shelf === shelfKey);
              return (
                <BookShelf
                  key={index}
                  title={BOOK_SHELVES[shelfKey]}
                  books={books}
                />
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
