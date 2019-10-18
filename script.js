//Arrow Functions - An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords.
//ES 6/2015

const years = [1990, 1991, 1992, 1996];
var ages5 = years.map(function(el){
    return 2016-el;
});

console.log(ages5); 

// ES 6/2015

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

console.log(ages6);