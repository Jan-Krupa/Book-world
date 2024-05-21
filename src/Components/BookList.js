import Book from './Book';

const BookList = (props) => {
    const allBooks = props.books.map((book) => (
        <Book
            key={book.id}
            book={book}
            flag={props.flag}
            handleFavorite={props.handleFavorite}
        />
    ));

    const favBooks = props.favoriteBooks.map((book) => (
        <Book
            key={book.id}
            book={book}
            flag={props.flag}
            handleFavorite={props.handleFavorite}
        />
    ));

    return (
        <div className="bookList">
            {props.onlyFavorite ? favBooks : allBooks}
        </div>
    );
};

export default BookList;
