import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';

const Book = (props) => {
    const navigate = useNavigate();

    const goToBookDetails = (book) => {
        navigate(`/book`, {
            state: {
                bookData: book,
                ready: 'yes',
            },
        });
    };
    return (
        <div className="book">
            <button
                className="book__btn"
                onClick={() => props.handleFavorite(props.book.id)}
            >
                {!props.book.favorite ? (
                    <FontAwesomeIcon icon={farFaHeart} />
                ) : (
                    <FontAwesomeIcon icon={fasFaHeart} />
                )}
            </button>

            <div
                className="book__cover"
                style={{
                    background: 'url(' + props.book.formats['image/jpeg'] + ')',
                }}
            ></div>
            <p className="book__title">
                <NavLink
                    to="/book"
                    onClick={() => props.currentBook(props.book)}
                >
                    {props.book.title.length > 40
                        ? props.book.title.slice(0, 40) + ' ...'
                        : props.book.title}
                </NavLink>
            </p>
        </div>
    );
};

export default Book;
