//IIFE
// syntax: ()()
//if we want to use two or more than two IIFE then we have to compulsorily use semicolon at the end of the IIFE

(function chai(){             //it is named IIFE as it has its own name
    console.log(`DB Connected`)
})();
( (name) => {              //irt is unnamed IIFE
    console.log(`DB Connected two ${name}`)
})('hitesh')         //if we want to pass a argument then we can do it like this