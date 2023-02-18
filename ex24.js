// ex q 24 ans
var str1 = "hello";
var str2 = "world";
var num1 = 5;
var num2 = 10;
var bool1 = true;
var bool2 = false;
var arr = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');
console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);
console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);
// Tests using the lower case function
console.log("Is str1 in lower case equal to 'hello'? I predict True.");
console.log(str1.toLowerCase() == 'hello');
console.log("Is str2 in lower case equal to 'world'? I predict True.");
console.log(str2.toLowerCase() == 'world');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2);
console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
console.log("Is bool1 AND bool2? I predict False.");
console.log(bool1 && bool2);
console.log("Is bool1 OR bool2? I predict True.");
console.log(bool1 || bool2);
// Test whether an item is in an array
console.log("Is 3 in arr? I predict True.");
console.log(arr.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in arr? I predict True.");
console.log(!arr.includes(6));
