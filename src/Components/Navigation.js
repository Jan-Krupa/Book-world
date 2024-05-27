import Button from './Button';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    const allBooksStyle = props.onlyFavorite
        ? { backgroundColor: '#64d9ce', color: 'white' }
        : { backgroundColor: 'white', color: '#64d9ce' };

    const favBooksStyle = props.onlyFavorite
        ? { backgroundColor: 'white', color: '#64d9ce' }
        : { backgroundColor: '#64d9ce', color: 'white' };
    return (
        <>
            <div className="nav__btnWrap">
                <NavLink to="/">
                    <Button
                        style={allBooksStyle}
                        txt="All books"
                        click={props.showAllBooks}
                    />
                </NavLink>
                <NavLink to="/favBooks">
                    <Button
                        style={favBooksStyle}
                        txt="Favorite"
                        click={props.showOnlyFavorite}
                    />
                </NavLink>
            </div>
            <div className="nav__btnWrap">
                <Button txt="Filters" click={props.openModal} />
            </div>
        </>
    );
};

export default Navigation;
