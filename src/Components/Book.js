import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';

const Book = (props) => {
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
                {props.book.title.length > 40
                    ? props.book.title.slice(0, 40) + ' ...'
                    : props.book.title}
            </p>
        </div>
    );
};

export default Book;
