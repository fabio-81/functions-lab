// 1. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num1){
    return num1 / 2
}

console.log(`Half of 5 is ${halfNumber(5)}.`)

// 2. Write a function called percentOf that will take two numbers,figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1,num2){
//console.log(`${num1} is ${(num1 / num2)*100}% of ${num2}`)
return num1 / num2 * 100
}
//percentOf(2,4)
console.log(`2 is ${percentOf(2,4)}% of 4`)


// 3. Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      EXTRA CHALLENGE: Round the result so there are only two digits after the decimal.

function areaOfCircle(num1){

return (num1**2) * 3.14159 
}

console.log(`The area for a circle with radius 2 is ${areaOfCircle(2)}.`)


// 4. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).


function multipleNumbers(num1){
return num1
}
myNumber=multipleNumbers(10/2)
myNumber=multipleNumbers(myNumber**2)
myNumber=multipleNumbers((myNumber**2)*3.145)
myNumber=multipleNumbers((myNumber/25) *100)


console.log(myNumber)