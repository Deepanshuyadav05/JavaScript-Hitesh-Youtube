 if(true){
    let a = 10;
    const b = 20;
    var c = 30;

 }

 // console.log(a)        //if we try to print 'a' then it will throw error as scope of 'let' is block scope mean if we declare it inside {} then it would be not accessed outside the {}
 // console.log(b)        //similarly with 'c' if we print it it will also throw error as scope of 'const' is also block scope
 console.log(c)           //but if we try to print c it will not give any error as scope of 'var' os 'function' scope mean it can be accessed them anywhere inside a function


 //nested scopes
 function one(){
    const username = "deep"

     function two(){
        const website = "youtube"
         //if we print username here it will not give error as we can access outer function element inside inner function but vice-versa is not true
         console.log(username)
     }
     //here if we try to print website outside the two() then it will throw error as they are not accessible outside the two()
     // console.log(website)
     two()
 }
 one()

 //declaring function using variable
 //add calling it before function definition

 //normal declaration
 //if we try to call a function declared normally before the function definition then it will not throw error
 addone(5)
 function addone(num){
    return num+1
 }
 //declaration with variable
 //if we try to call a function declared using variable before the function definition it will throw error
 // addTwo(5)
 const addTwo = function(num){
    return num+2
 }
 addTwo(5)
