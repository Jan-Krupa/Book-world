import Book from './Book';

const BookList = (props) => {
    return (
        <div className="bookList">
            {props.books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    flag={props.flag}
                    handleFavorite={props.handleFavorite}
                    currentBook={props.currentBook}
                />
            ))}
        </div>
    );
};

export default BookList;
