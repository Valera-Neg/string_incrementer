/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/


function incrementString (s) {
  if (s === ""){
    return "1"
  }
  const res = s.match(/(\d+)/)
   if (res === null) {
    return s + "1"
   }
  const numStrRes1 = res[0].toString()
  const num = parseInt(res[0]) + 1
  const numStrRes2 = num.toString()
  let newStr = "";
  if (numStrRes1.length > numStrRes2.length) {
    newStr =  s.slice(0, -numStrRes2.length)
  } else if (numStrRes1.length <= numStrRes2.length) {
    newStr =  s.slice(0, -numStrRes1.length);
  } else if (numStrRes1 === null) {
  }
  return newStr + numStrRes2
}

console.log(incrementString("foobar000")) //> "foobar001"
console.log(incrementString("foobar001")) //> "foobar002"
console.log(incrementString("foobar99")) //> "foobar100"
console.log(incrementString("foobar099")) //> "foobar100"
console.log(incrementString("foo0042")) //> "foo0043"
console.log(incrementString("foo")) //> "foo1"
console.log(incrementString("")) //> "1"