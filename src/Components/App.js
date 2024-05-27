import '../css/App.css';
import BookList from './BookList';
import Navigation from './Navigation';
import BookDetails from './BookDetails';
import Modal from './Modal';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';

const API = `https://gutendex.com/books?page=1`;

class App extends Component {
    state = {
        books: [],
        onlyFavorite: false,
        favoriteBooks: [],
        currentBook: {},
        title: '',
        author: '',
        language: 'en',
        copyright: false,
        modalOpen: false,
        isLoaded: false,
        page: 1,
        isNextPage: true,
    };

    booksCome = (api) => {
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                const newData = data.results.map(
                    (item) =>
                        (item = {
                            ...item,
                            favorite: false,
                        })
                );
                const nextPage = data.next ? true : false;
                this.setState({
                    books: newData,
                    isLoaded: true,
                    isNextPage: nextPage,
                });
            })
            .catch((error) => console.log(error + 'coś nie tak'));
    };

    componentDidMount() {
        this.booksCome(API);
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
            title: '',
            author: '',
            language: 'en',
            copyright: false,
        });
    };

    showOnlyFavorite = () => {
        this.setState({
            onlyFavorite: true,
            currentBook: {},
        });
    };

    currentBook = (book) => {
        this.setState({
            currentBook: book,
        });
    };

    changeFilters = (e) => {
        if (e.target.type === 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    submitFilters = (e) => {
        e.preventDefault();
        const filterApi = `https://gutendex.com/books?languages=${this.state.language}&search=${this.state.author}%20${this.state.title}&copyright=${this.state.copyright}`;
        this.setState({
            books: [],
            page: 1,
            isLoaded: false,
        });
        this.booksCome(filterApi);
    };

    openModal = () => {
        this.setState({
            modalOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            modalOpen: false,
        });
    };

    nextPage = () => {
        const api = `https://gutendex.com/books?page=${this.state.page + 1}`;
        this.setState({
            books: [],
            isLoaded: false,
            page: this.state.page + 1,
        });
        this.booksCome(api);
    };

    previousPage = () => {
        if (this.state.page > 1) {
            const api = `https://gutendex.com/books?page=${
                this.state.page - 1
            }`;
            this.setState({
                books: [],
                idLoaded: false,
                page: this.state.page + 1,
            });
            this.booksCome(api);
        }
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
                                openModal={this.openModal}
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
                                        isLoaded={this.state.isLoaded}
                                        page={this.state.page}
                                        nextPage={this.nextPage}
                                        previousPage={this.previousPage}
                                        isNextPage={this.state.isNextPage}
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
                                        isLoaded={this.state.isLoaded}
                                        nextPage={this.nextPage}
                                        previousPage={this.previousPage}
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
                        <Modal
                            state={this.state}
                            change={this.changeFilters}
                            submitFilters={this.submitFilters}
                            modalOpenState={this.state.modalOpen}
                            closeModal={this.closeModal}
                        />
                    </div>
                    <footer className="app__footer">© Jan Krupa 2024</footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
