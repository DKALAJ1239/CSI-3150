// const student = {
//     lastName: "Neutron",
//     firstName: "Jimmy",
//     age: 20,
//     DOB: "3/10/2003"
// }

/**JSON Object literal: */
// {
//     "lastName": "Neutron",
//     "firstName": "Jimmy",
//     "age": 20,
//     "DOB": "3/10/2003"
// }


/**Destructuring: */
// const { lastName, firstName, age, DOB } = student;

// console.log(lastName); // Outputs the following: Neutron
// console.log(firstName); // Outputs the following: Jimmy
// console.log(age); // Outputs the following: 20
// console.log(DOB); // Outputs the following: 3/10/2003

/** Question 3 --> Array Question */
const myFaveCandy = ["Jolly Rancher", "Butterfinger", "KitKat"];
/**Console Before*/
console.log(myFaveCandy);
/**Use of Push */
myFaveCandy.push("PayDay", "Twix");
/**Console After*/
console.log(myFaveCandy);
/**Use of Pop */
myFaveCandy.pop();
/**Console After Pop*/
console.log(myFaveCandy);

/**Use of Unshift */
myFaveCandy.unshift("Gummy Bears", "Gummy Worms");
/**Console After Unshift*/
console.log(myFaveCandy);
/**Use of forEach */
myFaveCandy.forEach((candy, index) => {
  console.log(`My #${index + 1} favorite candy is ${candy}.`);
});
/**Use of map */
const candyLengths = myFaveCandy.map((candy) => {
  return candy.length;
});
console.log(candyLengths);

/**Use of filter */
function mainFunc(length){
    return length > 10
}
console.log(candyLengths.filter(mainFunc));

const square = num => num ** 2;

console.log(square(2)); //4
console.log(square(3)); //9
console.log(square(4)); //16

{
  let myVariable = 2;
  console.log(myVariable);
}
console.log(myVariable);

function varScopeTest() {
  var myVariable = 2;
  if (true) {
    var myVariable = 3;
    console.log(myVariable);
  }
  console.log(myVariable);
}

varScopeTest();


{
  const myVariable = 2;
  console.log(myVariable);
  myVariable = 3;
}
console.log(myVariable);