import Book from './Book';

const BookList = (props) => {
    return (
        <div className="bookList">
            {props.books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
