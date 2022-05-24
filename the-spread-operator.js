/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [2, 3, 4]
// Copying an array
let arr2 = [...arr1]
arr2.push(5)
// Copying an object
let arr3 = {a:6, b:7}
// Copying only part of an array/object
let arr4 = [...arr1, 9, 10, 11, {...arr3}]
console.log('First Array:', arr1)
console.log('Second Array:', arr2)
console.log('Third Array:', arr3)
console.log('Fourth Array:', arr4)