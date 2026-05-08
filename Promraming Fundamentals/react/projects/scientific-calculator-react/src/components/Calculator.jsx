import { useCalculator } from "../hooks/useCalculator";

import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import History from "./History";

function Calculator() {

    const {
        expression,
        history,
        appendValue,
        clearAll,
        clearLast,
        calculate
    } = useCalculator();

    return (
        <div className="container-fluid calculator-page">

            <div className="row justify-content-center">

                <div className="col-lg-4 col-md-6">

                    <div className="calculator-card">

                        <h1 className="text-center mb-4">
                            Scientific Calculator
                        </h1>

                        <Display expression={expression} />

                        <ButtonGrid
                            appendValue={appendValue}
                            clearAll={clearAll}
                            clearLast={clearLast}
                            calculate={calculate}
                        />

                    </div>

                </div>

                <div className="col-lg-3 col-md-5 mt-4 mt-lg-0">

                    <History history={history} />

                </div>

            </div>

        </div>
    );
}

export default Calculator;