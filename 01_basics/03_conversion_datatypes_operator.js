// string to number conversion
let score="dep";

console.log(typeof score);
console.log(typeof(score));

let Newnum = Number(score)
console.log(Newnum);
console.log(typeof(Newnum));

// "33" => 33 (get converted and type is number)
// "33abc" => NaN (but type is number)
// true=1;false=0

// string to boolean conversion
let name = "deep";

let bool = Boolean(name);
console.log(typeof bool);
console.log(bool);

// false will come when => o,-o,on(BigInt value), ""(empty string), Null, undefined, NaN 
// in all other values it will print true

//Number to string conversion
let num=35;

let newnum= String(num);
console.log(typeof newnum);
console.log(newnum);


// *****Operations******
let value = 3;
let nValue = -value;
console.log(nValue);


console.log(2+2);        //Add
console.log(2-2);        //subtract
console.log(2*2);        //multiply
console.log(2/2);        //divide
console.log(2%2);        //modulo
console.log(2**2);       //power

let str1 = "hello";
let str2 = " deepanshu";
let str3 = str1 + str2;
console.log(str3);


console.log("1" + 2);        //in this type of case what ever come first string or number then the result will be calculated according to type first type  
console.log(1 + "2");
console.log(1 + 1 + "2");   // like here first there is no. then first 1 and 1 will add and then they get added like a string 
console.log("2" + 1 + 1);   // like here first is string so whole is added as string
