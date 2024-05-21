import '../css/App.css';
import BookList from './BookList';
import Navigation from './Navigation';

import React, { Component } from 'react';

const API = 'https://gutendex.com/books';

class App extends Component {
    state = {
        books: [],
        onlyFavorite: false,
        favoriteBooks: [],
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
                console.log(newData);
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
        });
    };

    showOnlyFavorite = () => {
        this.setState({
            onlyFavorite: true,
        });
    };

    render() {
        return (
            <div className="app">
                <h1 className="app__title">Book World</h1>
                <div className="app__nav">
                    <Navigation
                        showAllBooks={this.showAllBooks}
                        showOnlyFavorite={this.showOnlyFavorite}
                    />
                </div>
                <div className="app__bookList">
                    <BookList
                        books={this.state.books}
                        handleFavorite={this.handleFavorite}
                        favoriteBooks={this.state.favoriteBooks}
                        onlyFavorite={this.state.onlyFavorite}
                    />
                </div>
                <footer className="app__footer">© Jan Krupa 2024</footer>
            </div>
        );
    }
}

export default App;
