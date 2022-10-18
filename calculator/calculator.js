
function kalk(){
    let number1 =parseInt(document.getElementById("num1").value) ;

    let number2 =parseInt(document.getElementById("num2").value);

    let operator = document.getElementById("operator").value;

    // console.log(number1, number2, operator);

    let shedegi;
    let shedegi1;
    let shedegi2;
    let shedegi3;
    let shedegi4;
    let shedegi5;


    switch(operator){
        case "+":
        shedegi = number1+number2;
            document.getElementById("answer").innerHTML = number1 + "+" + number2 +"=" + shedegi;      
        break;

        case "-":
            shedegi1=number1-number2;
            document.getElementById("answer").innerHTML =number1 + "-" + number2 +"=" + shedegi1;
        break;

        case "*":
            shedegi2=number1*number2
            document.getElementById("answer").innerHTML = number1 + "*" + number2 +"=" + shedegi2;
        break;

        case "/":
            shedegi3=number1/number2
            document.getElementById("answer").innerHTML = number1 + "/" + number2 +"=" + shedegi3;
        break;

        // case "x":
        //     shedegi4=number1xnumber2
        //     document.getElementById("answer").innerHTML = number1 + "x" + number2 +"=" + shedegi4;
        // break;

        // case ":":
        //     shedegi5=number1:number2
        //     document.getElementById("answer").innerHTML = number1 + ":" + number2 +"=" + shedegi4;
        // break;

        default:  document.getElementById("answer").innerHTML = "ar chagiweria operatori";


    }
}