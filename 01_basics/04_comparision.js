//comparison of similar datatypes
console.log(2>3);          //greater than
console.log(2<3);          //less than
console.log(2>=3);         //greater than equal to
console.log(2<=3);         //less than equal to
console.log(2==3);         //equal
console.log(2!=3);         //not equal to


//comparison of two different data types(result is not predictable)
console.log("02" > 1);
console.log("2" > 1);



//comparison of  null
//the reason is that the equality (==) and comparison operator (>,<,<=,>=) work differenty as comparison operator convert the null value to zero(0) thats why (2) is true and (1) and (3) is false
// we mostly avoid this type of code in industry use
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);


// it always show false value
// we mostly avoid this type of code in industry use
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//strict checking
console.log("2"===2);