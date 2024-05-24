const Button = (props) => {
    return (
        <button style={props.style} onClick={props.click} className="btn">
            {props.txt}
        </button>
    );
};

export default Button;
