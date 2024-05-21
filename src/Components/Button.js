const Button = (props) => {
    return (
        <button onClick={props.click} className="btn">
            {props.txt}
        </button>
    );
};

export default Button;
