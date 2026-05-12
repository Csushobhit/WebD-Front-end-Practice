
//LET VAR AND CONST

let name = "Rohit";
let age = 20;
console.log(name, age);
// let age = 40; gives error cannot give same variable
age = 60;
const account = 1234;
console.log(name, age, account);
// account = 12345; gives error constant value
console.log(name, age, account);

var a = 100;
console.log(name, age, account, a);

var a = 200; //This doesnot gives error even declaring 2 seperate time 
// var also doesnot follow scope of declaration thats why generally not used
console.log(name, age, account, a);

//DATATYPES
//PRIMITIVE DATA TYPES
// number, string, boolean, undefined, null, bigint, symbol

//NON PRIMITIVE DATATYPE
//array, object, fucntion

//number
let q = 10;
let b = 2.3;

let user;
// const jai; gives error have to initialise
console.log(user);


//symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1==id2);

let s = function add()
{
    console.log("Hello");
}

console.log(s)