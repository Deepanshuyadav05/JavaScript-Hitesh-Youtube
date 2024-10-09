//This
const user = {
    username: 'John',
    email: 'john@example.com',
    password: 'password@example.com',
    greet: function (){
        console.log(this);    //it will return the object it which it is present
        console.log(this.username);    //we cannot directly access username from here we have to use this
    }
}
user.greet()

console.log(this)     //if we simply print 'this' then it returns an empty object but if we print it in console then it returns window object but here it points to global object

function chai(){
    console.log(this);   //here it returns global object
    let user = "deep"
    console.log(this.user);     //here it gives undefined as it only work in object not in function
}
chai()

//using arrow fn
const code = () => {
    console.log(this)      //still it return empty object
    let user = "deep"
    console.log(this.user);    //here also it will again return undefined
}
code()

//Arrow Function
const sum  = (a,b) => {
    return a + b;
}
console.log(sum(23,45))

//implicit return in arrow fn
const sub = (a,b) => (a-b)          //when we use curly braces then we have to use return but when we use parenthesis then we don't have to use return it will automatically return the value
console.log(sub(52,12))

//printing object with implicit return
const obj = () => ({user:"dep"})     //if we have to return object then also we have to wrap it in the parenthesis else it will not print
console.log(obj())