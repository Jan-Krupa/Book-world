import Button from './Button';

const Navigation = () => {
    return (
        <>
            <div className="nav__btnWrap">
                <Button txt="All books" />
                <Button txt="Favourits" />
            </div>
            <div className="nav__btnWrap">
                <Button txt="Filters" />
            </div>
        </>
    );
};

export default Navigation;
