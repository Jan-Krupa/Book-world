import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

import { faXmark as fasXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    const { title, author, language, copyright } = props.state;

    const modalStyle = props.modalOpenState
        ? { display: 'block' }
        : { display: 'none' };
    return (
        <>
            <div className="modalWrapper" style={modalStyle}></div>
            <div className="modal" style={modalStyle}>
                <FontAwesomeIcon icon={fasXmark} onClick={props.closeModal} />
                <h1 className="modal__title">Filters</h1>
                <form
                    action="submit"
                    onSubmit={props.submitFilters}
                    className="modal__dialog"
                >
                    <div className="modal__dialog--box dialog">
                        <p className="dialog__title">Title:</p>
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={props.change}
                            className="dialog__input"
                        />
                    </div>
                    <div className="modal__dialog--box dialog">
                        <p className="dialog__title">Author:</p>
                        <input
                            name="author"
                            value={author}
                            onChange={props.change}
                            type="text"
                            className="dialog__input"
                        />
                    </div>
                    <div className="modal__dialog--box dialog">
                        <p className="dialog__title">Language:</p>
                        <select
                            className="dialog__select"
                            name="language"
                            id="language"
                            value={language}
                            onChange={props.change}
                        >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                    <div className="modal__dialog--box dialog">
                        <p className="dialog__title">Copyright:</p>
                        <input
                            value={copyright}
                            name="copyright"
                            onChange={props.change}
                            type="checkbox"
                            className="dialog__input"
                        />
                    </div>
                    <div className="modal__dialog--btn">
                        <Button
                            click={props.closeModal}
                            style={{ width: '100%', margin: 0 }}
                            txt="apply"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Modal;
