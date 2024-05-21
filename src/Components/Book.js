const Book = (props) => {
    return (
        <div className="book">
            <div
                className="book__cover"
                style={{
                    background: 'url(' + props.book.formats['image/jpeg'] + ')',
                }}
            ></div>
            <p className="book__title">
                {props.book.title.length > 40
                    ? props.book.title.slice(0, 40) + ' ...'
                    : props.book.title}
            </p>
        </div>
    );
};

export default Book;
