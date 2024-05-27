import Book from './Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BookList = (props) => {
    console.log(props.books);
    const lists = props.books.map((book) => (
        <Book
            key={book.id}
            book={book}
            flag={props.flag}
            handleFavorite={props.handleFavorite}
            currentBook={props.currentBook}
        />
    ));
    return (
        <div className="bookList">
            {props.isLoaded ? (
                lists
            ) : (
                <p className="bookList__loading">Loading books ...</p>
            )}
            {props.isLoaded && !props.onlyFavorite && props.isNextPage ? (
                <div className="bookList__nav">
                    <button
                        className="bookList__nav--button"
                        onClick={props.previousPage}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <p className="bookList__nav--display">{props.page}</p>
                    <button
                        className="bookList__nav--button"
                        onClick={props.nextPage}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default BookList;
