console.log("Abu BAkar Rasheed");
console.log("Javascript Lover");

//__________________________ Variables

name=("Abu bakar");
console.log(name);

Age= (22);
console.log(Age);

price=(99.99);
console.log(price);

x=(null);            // Pta hai k value null hai
console.log(x);

y=(undefined);        //Pta hi nahi k value kya hai
console.log(y);

isFollow=true;
console.log(isFollow);

//_______________ Let , Var, Constant

//Var -> A var can be re declared and updated. Global scope 

var age=22; 
var age= 24;
var age=25;
console.log(age);

//Let  -> A let cant be declared but updated.Block scope

let age=25;
 age=28;
 age=30;
console.log(age);

//Const -> cant redeclared and updated.It is most used. Block scope

let PI=3.14;
console.log(PI);


//____________________DataType

//1: Primitive = mean fixed. They r 7. num, string,boolean,undefined,null,bigint,symbol
//2: Non-Primmitive = Objects

//Primitive

let aged=25;     //num
let names="Abbbbb";  //string
isFollow=true;  //boolean
let x;    //undefined
let y=null;   //null
let a=Bigint("123");  //bigint
let b=Symbol("bkr");    //Symbol

//Non-Primitive
//i) Arrays  ii) Objects

const student={
    name:"Ab",
    age:22,
    cgpa:3,
    isPass:Yes,
};

//It is used to store multipe data
