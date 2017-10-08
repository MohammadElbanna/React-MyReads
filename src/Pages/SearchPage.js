import React, { Component } from "react";
import * as BooksAPI from "./../BooksAPI";
import SearchBar from "./../Components/Search/SearchBar";
import BooksGrid from "./../Components/Book/BooksGrid";
import "./../App.css";

class SearchPage extends Component {
  state = {
    searchResults: []
  };

  doSearch = event => {
    let searchPromise = BooksAPI.search(event.target.value, 20);
    let bookWithShelvesPromsie = BooksAPI.getAll();
    let searchResults = [];
    searchPromise
      .then(searchData => {
        searchResults = searchData;
        return bookWithShelvesPromsie;
      })
      .then(booksInShelves => {
        return searchResults.map(searchResult => {
          let searchResultShelfValue = booksInShelves.find(
            item => item.id === searchResult.id
          );
          if (searchResultShelfValue) {
            searchResult.shelf = searchResultShelfValue.shelf;
          }
          return searchResult;
        });
      })
      .then(finalResults => {
        this.setState({
          searchResults: finalResults
        });
      });
  };

  handleBookShelfChange = event => {
    if (event.target.nodeName.toLowerCase() === "select") {
      let optionElement = event.target.options[event.target.selectedIndex];
      let bookId = optionElement.dataset.bookid;
      let newShelfTitle = optionElement.value;
      BooksAPI.update({ id: bookId }, newShelfTitle);
      this.setState(prevState => {
        let newBookList = prevState.searchResults.map(book => {
          if (book.id === bookId) {
            book.shelf = newShelfTitle;
          }
          return book;
        });
        return { searchResults: newBookList };
      });
    }
  };

  render() {
    return (
      <div className="search-books" onChange={this.handleBookShelfChange}>
        <SearchBar doSearch={this.doSearch} />
        <div className="search-books-results">
          <BooksGrid books={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default SearchPage;
