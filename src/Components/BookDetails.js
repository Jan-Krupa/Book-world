import Button from './Button';
import { NavLink } from 'react-router-dom';

const BookDetails = (props) => {
    const { title, authors, languages, bookshelves, formats, subjects } =
        props.book;

    const url = formats['text/html'];
    return (
        <div className="bookDetails">
            <div
                className="bookDetails__img"
                style={{
                    background: 'url(' + formats['image/jpeg'] + ')',
                }}
            ></div>
            <div className="bookDetails__info">
                <div className="bookDetails__info--wrapper">
                    <h3 className="bookDetails__info--title">Title: {title}</h3>
                    <p className="bookDetails__info--author">
                        Author: {authors[0].name}
                    </p>
                    <p className="bookDetails__info--languages">
                        Languages: {languages}
                    </p>
                </div>
                <NavLink to={url} target="_blank">
                    <Button txt="Read book" />
                </NavLink>
            </div>
            <div className="bookDetails__details">
                <p className="bookDetails__details--title">Book details:</p>
                <ul className="bookDetails__details--bookshelves">
                    <strong>Bookshelves:</strong>
                    {bookshelves.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <ul className="bookDetails__details--subjects">
                    <strong>Subjects:</strong>
                    {subjects.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookDetails;
