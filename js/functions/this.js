console.log(this)      // this refer to current context

// In JavaScript, the this keyword refers to the object that is executing the current code or function.
//  Its value is determined at runtime based on how the function is called,


let profile = {
  name: "bhanwar lal",
  age: 18,

  greet: function () {
    return this.name;
  },
};


let profile2 = {
  firstName: "lokesh",
  lastName: "choudhary",
  age: 19,

name: function () {
    return this.firstName
  },

  greet: function () {
    return "Hello "+ this.firstName + " " + this.lastName + " welcome to our website";
  },

};




console.log(profile2.name());
console.log(profile2.greet());



