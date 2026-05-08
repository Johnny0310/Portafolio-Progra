function Button({ label, className, onClick }) {

    return (
        <button
            className={`btn ${className} calculator-button`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;