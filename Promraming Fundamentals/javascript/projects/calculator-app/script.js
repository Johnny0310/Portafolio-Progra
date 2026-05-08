const display = document.getElementById("display");

function appendValue(value) {

    display.value += value;
}

function clearAll() {

    display.value = "";
}

function clearLast() {

    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        if (display.value.trim() === "") {
            return;
        }

        const result = eval(display.value);

        display.value = result;

    } catch (error) {

        display.value = "Error";
    }
}