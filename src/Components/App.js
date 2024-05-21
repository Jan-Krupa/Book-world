import '../css/App.css';
import BookList from './BookList';
import Navigation from './Navigation';

import React, { Component } from 'react';

const API = 'https://gutendex.com/books';

class App extends Component {
    books = fetch(API)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error + 'coś nie tak'));

    render() {
        return (
            <div className="app">
                <h1 className="app__title">Book World</h1>
                <div className="app__nav">
                    <Navigation />
                </div>
                <div className="app__bookList">
                    <BookList />
                </div>
                <footer className="app__footer">© Jan Krupa 2024</footer>
            </div>
        );
    }
}

export default App;
