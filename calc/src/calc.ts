const operations = {
    add: 'add',
    multi:'multi',
    subtract: 'subtract',
    divide: 'divide'
};

function calcObject( operation : string, firstNumber : number, secondNumber : number ) {
    const secondNum = (<HTMLInputElement>document.querySelector(".secondNumber")).value;
    const result = <HTMLSpanElement>document.querySelector(".result");

    switch (operation) {
        case (operations.add):
            return (firstNumber + secondNumber).toFixed(5);
        case (operations.multi):
            return (firstNumber * secondNumber).toFixed(5) ;
        case (operations.subtract):
            return (firstNumber - secondNumber).toFixed(5);
        case (operations.divide):

            if (secondNum === "0"){
                result.textContent = "can't divide by zero"
            } else{
                return (firstNumber / secondNumber).toFixed(5);
            }

        default:
            return "unknown operation";
    }
}

export  {calcObject}
