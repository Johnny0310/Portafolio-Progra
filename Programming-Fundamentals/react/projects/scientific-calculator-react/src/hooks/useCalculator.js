import { useState } from "react";

export function useCalculator() {

    const [expression, setExpression] = useState("");
    const [history, setHistory] = useState([]);

    function appendValue(value) {

        setExpression(prev => prev + value);
    }

    function clearAll() {

        setExpression("");
    }

    function clearLast() {

        setExpression(prev => prev.slice(0, -1));
    }

    function calculate() {

        try {

            const result = eval(expression);

            const operation = `${expression} = ${result}`;

            setHistory(prev => [operation, ...prev]);

            setExpression(result.toString());

        } catch {

            setExpression("Error");
        }
    }

    return {
        expression,
        history,
        appendValue,
        clearAll,
        clearLast,
        calculate
    };
}