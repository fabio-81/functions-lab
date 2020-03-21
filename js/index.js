// 1. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

let myNumber=5;

function halfNumber(){

console.log(`half of ${myNumber} is ${myNumber/2}`)
}

halfNumber()

// 2. Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
let numberOne=2
let numberTwo=4

function percentOf(num1,num2){

return (num1 / num2) *100
}
console.log(`${numberOne} is ${percentOf(2,4)}% of ${numberTwo}`)

// 3. Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      EXTRA CHALLENGE: Round the result so there are only two digits after the decimal.


let circleRadius=2

function areaOfCircle(num1,num2){

return (num1**2) * num2

}
areaOfCircle()
console.log(`The area for a circle with radius ${circleRadius} is ${areaOfCircle(2,3.145)}`)

// 4. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

let aNumber=10
let number1=(aNumber/2)
let number2=(number1**2)
let number3=((number2**2)*3.145)

function ex4(number){


console.log(`${number}`)



}
ex4(number1)
ex4(number2)
ex4(number3)
