import Button from './Button';

const Navigation = (props) => {
    return (
        <>
            <div className="nav__btnWrap">
                <Button txt="All books" click={props.showAllBooks} />
                <Button txt="Favorite" click={props.showOnlyFavorite} />
            </div>
            <div className="nav__btnWrap">
                <Button txt="Filters" />
            </div>
        </>
    );
};

export default Navigation;
