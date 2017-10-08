import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./Pages/SearchPage";
import MainPage from "./Pages/MainPage";
import { APP_NAME } from "./constants";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" render={() => <MainPage appName={APP_NAME} />} />
      </div>
    );
  }
}

export default BooksApp;
