//message to ensure we have our javascript file sourced in correctly to our index.html file
console.log('Hello World!');

//array of cars
const cars = ['ford', 'chevy', 'honda'];

//hard-coded index of the item at index 2...will be 'honda'
console.log(cars[2]);

//get the last car array using .length of the car array
const lastItem = cars[cars.length - 1];
console.log('last item in cars array hard-coded', lastItem);

//made a newCar variable with value set to toyota
const newCar = 'toyota';
//cars is our array, add the newCar to the cars array
cars.push(newCar);
console.log('cars: ', cars); //cars array now has toyota added to the end of the array

//what array method removes the last item? cars.pop()
const removedLastCar = cars.pop();
console.log('removed from cars array', removedLastCar);

//loops:
for (let i = 0; i < cars.length; i++) {
  // regular loop uses the index to get the value
  console.log(cars[i]);
}

//for...of loop does not have access to the index
for (let car of cars) {
  console.log('my car is', car);
}

//while loops need a way to exit the loop
//set a condition in which to end, otherwise it will run forever.......
let j = 0;
while (j < 4) {
  console.log('do something...', j);
  //make sure to adjust the value controlling the condition, ie, j++
  j++;
}
//9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let boxes = 0;
let parts = 572;
while (parts > 7) {
  // while parts is greater than 7, count a box and subtrack 7 from total parts
  boxes += 1;
  parts -= 7;
}
//string template literal is another way to build strings
// the '`' tick mark is used to indicate the string template literal
// use the ${...}
console.log(`${boxes} boxes filled with ${parts} left over`);

// the modulus operator is % finding the remainder
console.log('what is this', 2 % 2 === 0); //this is true
