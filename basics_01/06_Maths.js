const score = 400         //in this by seeing it in result we can't say that it is number
const balance = new Number(200.231)         //here we are 100% sure that it is a number
console.log(balance)

// tostring
console.log(balance.toString())       //it converts number to string

//tofixed
console.log(balance.toFixed(2))         //give precise value upto 2 decimal

//toprecision
console.log(balance.toPrecision(4))        //make value precise till given number

//tolocalstring
let other_num = 100000
console.log(other_num.toLocaleString('en-US'))   //it put commas as per us standard
console.log(other_num.toLocaleString())   //it put commas as per indian standard



// **********************************************Maths**********************************************************
//abs     (convert -ve no. to +ve not vice versa)
console.log(Math.abs(5))          //don't do anything
console.log(Math.abs(-5))         //change it to +ve no.

//PI
console.log(Math.PI)

//Round
console.log(Math.round(39.324))    //round of the given value acc. to the no. after decimal if it is >.5 then round off the bigger integer if <.5 then round of to smaller integer here it round of to smaller integer
console.log(Math.round(39.9))      //it will round off to the upper integer
//ceil
console.log(Math.ceil(23.2))       //convert the no. to the upper integer
//floor
console.log(Math.floor(23.9))      //convert the no. to the lower integer

//pow       (use to give power)
console.log(Math.pow(2,3))      //put y value to the power of x
console.log(Math.pow(-2,3))
console.log(Math.pow(2,-3))

//log
console.log(Math.log(2))            //give the value of log

//trigonometric function
console.log(Math.sin(1))          //give the value of sin function
console.log(Math.cos(1))          //give the value of cos function
console.log(Math.tan(1))          //give the value of tan function
console.log(Math.asin(1))         //give the value of inverse of sin(sec) function
console.log(Math.acos(1))         //give the value of inverse of cos(cosec) function
console.log(Math.atan(1))         //give the value of inverse of tan(cot) function

//minimum
console.log(Math.min(23,53,12,7,-50))      //gives the minimum value from the given value

//maximum
console.log(Math.max(65,25,86,4,-7,45))    //gives the maximum value from the given value

//random
console.log(Math.random())                  //it generate random value from 0-10
console.log((Math.random()*10)+1)               //we multiply 10 if we want value from 1-10 //we add 1 as if 0.00 comes then after multiply with 10 it will be 0 only
// formula for range random values
let min = 10
let max = 20
console.log( Math.floor (Math.random() * ( max - min + 1 ) )+ min )    //here we put floor to get integer, (max-min+1) to avoid 0, and to get min value we add minimum

