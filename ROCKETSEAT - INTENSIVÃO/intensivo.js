//1- alert("Hello World!")

/*
2-  let a = 10;
 let b = 15;
 const sum = a + b;
 console.log(sum)
*/

/*
3, 4 e 5-
function checkNumberOrString (num, string, parametro) {
  
  if (typeof num === "number"){
    console.log("É um número")
  } else {
    console.log("Não é um número")
  }

  if (typeof string === "string") {
    console.log("É uma string")
  } else {
    console.log("Não é uma string")
  }
  
  if(parametro === true || parametro === false) {
    console.log("É um booleano")
  } else {
    console.log("Não é um booleano")
  }
}
isNumber(10, "olá", true)
*/

/* 
6-
let num1 = 10;
let num2 = 20;
const sub = num1 - num2
console.log(sub)
*/

/*
7-
let num1 = 10;
let num2 = 20;
const mult = num1 * num2
console.log(mult)

8-
let num3 = 40;
let num4 = 2;
const div = num3 / num4
console.log(div)
*/

// 9 e 10-
const checkPairAndOdd = () => {
  function checkPair (pair) {
    if (pair % 2 == 0) {
      console.log("É um número par")
    } else {
      console.log("Não é um número par")
    }
  }  
  function checkOdd(odd) {
    if(odd % 2 != 0) {
      console.log("É um número ímpar")
    } else {
      console.log("Não é um número ímpar")
    }
  }
  checkPair(100)
  checkOdd(5)
}
checkPairAndOdd()