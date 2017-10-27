var chocolateBars = [ 'snickers','hundred grand','kitkat','skittles']
<<<<<<< HEAD
//console.log(chocolateBars)

//const array = [1]
//const element = 'foo'
=======
console.log(chocolateBars)

const array = [1]
const element = 'foo'
>>>>>>> df2e2ab46fe028b565d23895346a314dbb867e43

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
<<<<<<< HEAD
//console.log(array)
=======
console.log(array)
>>>>>>> df2e2ab46fe028b565d23895346a314dbb867e43

function destructivelyAddElementToBeginningOfArray(array, element) {
      array.unshift(element);
  return array
}
<<<<<<< HEAD
//console.log(destructivelyAddElementToBeginningOfArray(array))
=======
console.log(destructivelyAddElementToBeginningOfArray(array))
>>>>>>> df2e2ab46fe028b565d23895346a314dbb867e43

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
      array.push(element);
  return array
}

function accessElementInArray(array,index) {
  return array[2]
}
<<<<<<< HEAD

function destructivelyRemoveElementFromBeginningOfArray(array){
      array.shift()
  return array
}

var array = [1,2,3]

function removeElementFromBeginningOfArray(array){
      return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
      array.pop()
      return array
}

//cat = array.slice(0, array.length - 1 )
//console.log(array)

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1 )
  return array
}
=======
>>>>>>> df2e2ab46fe028b565d23895346a314dbb867e43
