function Display({ expression }) {

    return (
        <input
            type="text"
            className="form-control calculator-display mb-4"
            value={expression}
            readOnly
        />
    );
}

export default Display;