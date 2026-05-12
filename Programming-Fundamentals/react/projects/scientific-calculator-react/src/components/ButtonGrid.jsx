import Button from "./Button";

function ButtonGrid({
    appendValue,
    clearAll,
    clearLast,
    calculate
}) {

    return (
        <div className="calculator-grid">

            <Button
                label="AC"
                className="btn-danger"
                onClick={clearAll}
            />

            <Button
                label="C"
                className="btn-warning"
                onClick={clearLast}
            />

            <Button
                label="("
                className="btn-secondary"
                onClick={() => appendValue("(")}
            />

            <Button
                label=")"
                className="btn-secondary"
                onClick={() => appendValue(")")}
            />

            <Button
                label="7"
                className="btn-light"
                onClick={() => appendValue("7")}
            />

            <Button
                label="8"
                className="btn-light"
                onClick={() => appendValue("8")}
            />

            <Button
                label="9"
                className="btn-light"
                onClick={() => appendValue("9")}
            />

            <Button
                label="/"
                className="btn-primary"
                onClick={() => appendValue("/")}
            />

            <Button
                label="4"
                className="btn-light"
                onClick={() => appendValue("4")}
            />

            <Button
                label="5"
                className="btn-light"
                onClick={() => appendValue("5")}
            />

            <Button
                label="6"
                className="btn-light"
                onClick={() => appendValue("6")}
            />

            <Button
                label="*"
                className="btn-primary"
                onClick={() => appendValue("*")}
            />

            <Button
                label="1"
                className="btn-light"
                onClick={() => appendValue("1")}
            />

            <Button
                label="2"
                className="btn-light"
                onClick={() => appendValue("2")}
            />

            <Button
                label="3"
                className="btn-light"
                onClick={() => appendValue("3")}
            />

            <Button
                label="-"
                className="btn-primary"
                onClick={() => appendValue("-")}
            />

            <Button
                label="0"
                className="btn-light"
                onClick={() => appendValue("0")}
            />

            <Button
                label="."
                className="btn-light"
                onClick={() => appendValue(".")}
            />

            <Button
                label="="
                className="btn-success"
                onClick={calculate}
            />

            <Button
                label="+"
                className="btn-primary"
                onClick={() => appendValue("+")}
            />

        </div>
    );
}

export default ButtonGrid;