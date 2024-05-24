import '../css/App.css';
import BookList from './BookList';
import Navigation from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React, { Component } from 'react';
import BookDetails from './BookDetails';

const API = 'https://gutendex.com/books';

class App extends Component {
    state = {
        books: [],
        onlyFavorite: false,
        favoriteBooks: [],
        currentBook: {},
    };

    componentDidMount() {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                const newData = data.results.map(
                    (item) =>
                        (item = {
                            ...item,
                            favorite: false,
                        })
                );

                this.setState({
                    books: newData,
                });
            })
            .catch((error) => console.log(error + 'coś nie tak'));
    }

    handleFavorite = (id) => {
        let books = [...this.state.books];
        const index = this.state.books.findIndex((book) => book.id === id);
        books[index].favorite = !books[index].favorite;
        let favBooks = books.filter((book) => book.favorite);
        this.setState({
            books,
            favoriteBooks: favBooks,
        });
    };

    showAllBooks = () => {
        this.setState({
            onlyFavorite: false,
            currentBook: {},
        });
    };

    showOnlyFavorite = () => {
        this.setState({
            onlyFavorite: true,
            currentBook: {},
        });
    };

    currentBook = (book) => {
        console.log(book);
        this.setState({
            currentBook: book,
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <h1 className="app__title">Book World</h1>
                    <div className="navWrapper">
                        <div className="app__nav">
                            <Navigation
                                showAllBooks={this.showAllBooks}
                                showOnlyFavorite={this.showOnlyFavorite}
                                onlyFavorite={this.state.onlyFavorite}
                            />
                        </div>
                    </div>
                    <div className="app__bookList">
                        <Routes>
                            <Route
                                path="/"
                                exact
                                element={
                                    <BookList
                                        books={this.state.books}
                                        handleFavorite={this.handleFavorite}
                                        onlyFavorite={this.state.onlyFavorite}
                                        currentBook={this.currentBook}
                                    />
                                }
                            />
                            <Route
                                path="/favBooks"
                                element={
                                    <BookList
                                        books={this.state.favoriteBooks}
                                        handleFavorite={this.handleFavorite}
                                        currentBook={this.currentBook}
                                        onlyFavorite={this.state.onlyFavorite}
                                    />
                                }
                            />
                            <Route
                                path="/book"
                                element={
                                    <BookDetails
                                        book={this.state.currentBook}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                    <footer className="app__footer">© Jan Krupa 2024</footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
