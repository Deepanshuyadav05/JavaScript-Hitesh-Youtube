// //here we are only printing value
// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,8);
//
//
// //returning value
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

//default value
function userLogin(userName){
    // if (userName === undefined){        //if our value in false it will not enter 'if'
    if (!userName){                        //if our value is false then ! convert it to true and we enter 'if'
        console.log("not login");
        return
    }
    return `${userName} just logged in`;
}

console.log(userLogin(""))