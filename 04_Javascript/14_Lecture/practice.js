// let obj = {
//   name: "sumit",
//   class: "12th",
//   age: 21,
// }


// console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(obj);

// Object.defineProperty(obj,"name",{
//     // writable: true,
//     writable: false,
//     enumerable: true,
//     // configurable: true, 
//     configurable: false,
// })
// Object.defineProperty(obj,"name",{
//     writable: true,
// })


// obj.name= "Amit"

// console.log(obj);

// let obj2 = {
//     balance: 10
// }


// 👉 hasOwnProperty 

const obj = {
    name: "John",
    age: 30
  };
  
  // Check if obj has specific properties
  console.log(obj.hasOwnProperty("name")); // true
  console.log(obj.hasOwnProperty("age"));  // true
  console.log(obj.hasOwnProperty("toString")); // false (inherited from Object.prototype)
  
  // Using a property that isn't defined
  console.log(obj.hasOwnProperty("gender")); // false
  


  const parent = { parentProp: "I am inherited" };
const child = Object.create(parent);
child.childProp = "I am own";

console.log(child.hasOwnProperty("childProp")); // true (own property)
console.log(child.hasOwnProperty("parentProp")); // false (inherited property)


// 🌻 Notes:
// 👉 Avoid Overriding hasOwnProperty: If an object has a property named hasOwnProperty, it could shadow the native method. In such cases, use Object.prototype.hasOwnProperty.call().


const obj1 = { hasOwnProperty: "Oops" };

// Fails
// console.log(obj1.hasOwnProperty("name")); // TypeError

// Works
console.log(Object.prototype.hasOwnProperty.call(obj1, "name")); // false
