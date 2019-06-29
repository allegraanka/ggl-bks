import React, { Component } from "react";
import SearchField from "./components/SearchField/SearchField";
import BooksDisplay from "./components/BooksDisplay/BooksDisplay";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Book Finder</h1>
          <p className="App-intro">
            To get started, search below for a book title.
        </p>
        </div>
        <div className="book-search">
          <SearchField />
          <BooksDisplay />
        </div>
      </div>
    );
  }
}

export default App;
