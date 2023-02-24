function calculator() {
    let operation = prompt("Введите операцию (+, -, *, /, **, %):");
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Вы ввели неправильное число!");
        return;
    }
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        case "%":
            if (num2 === 0) {
                console.log("На ноль делить нельзя!");
                return;
            }
            result = num1 % num2;
            break;
        default:
            console.log("Вы ввели неправильную операцию!");
            return;
    }
    console.log("Результат: ", result);
}
calculator();
