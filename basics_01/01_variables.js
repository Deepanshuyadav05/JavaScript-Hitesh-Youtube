const accountNumber=123;                            // we have to assign the value to the const at the time of declaration otherwise it shows error  // we cant modify the value of cost ince it is assigned
let adderess="kosli";
var name="deep";                                    //nowadays, we don't use var because issues in block scope and functional scope (scope is when we use {} brackets like in loop,if-else,objects,functions etc..)
house="161";                                        // we can declare variable without giving datatype to it (but it is not recommended)
let declare;                                        

console.log(adderess);
console.table([accountNumber,adderess,name,house,declare]); //use to print multiple variable at same time in table format
console.log(typeof(declare));                               //when we don't assign any value to let or var then its type is undefined-
console.log([typeof(accountNumber),typeof(adderess),typeof(name),typeof(house),typeof(declare)]);
