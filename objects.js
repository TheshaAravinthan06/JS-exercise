// 🌟 1. Create an Empty Object
const person = {}; 
console.log("1️⃣ Empty Object:", person);


// 🌟 2. Create an Object with Properties and Methods
const personDetails = {
  name: "John",
  age: 25,

  // Method to introduce the person
  IntroduceYou: function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
};

// Call the method
personDetails.IntroduceYou();



// 🌟 3. Create a Method that Greets Students
const person2 = {
  name: "John",
  age: 25,

  greetStudent: function(student) {
    console.log(`Hello ${student.name}, Welcome to the Coding School!`);
  }
};

const student = { name: "Shan" };
person2.greetStudent(student);



// 🌟 4. Access Object Properties (Dot and Bracket Notation)
const person3 = {
  name: "John",
  age: 25
};

console.log("4️⃣ Access using dot notation:", person3.name);     // John
console.log("   Access using bracket notation:", person3["age"]); // 25



// 🌟 5. Add a New Property
person3.email = "shan@example.com";
console.log("5️⃣ After adding email:", person3);



// 🌟 6. Remove a Property
delete person3.email;
console.log("6️⃣ After removing email:", person3);

// 🌟 7. Check Property Existence
console.log("7️⃣ 'name' in person3:", "name" in person3); // true
console.log("   person3.hasOwnProperty('email'):", person3.hasOwnProperty("email")); // false

---

// 🌟 8. Merge Two Objects
const studentObj = { name: "Shan", age: 20 };
const courseObj = { subject: "JavaScript", duration: "3 months" };

// Method 1: Spread operator
const studentCourse = { ...studentObj, ...courseObj };

// Method 2: Using Object.assign()
// const studentCourse = Object.assign({}, studentObj, courseObj);

console.log("8️⃣ Merged Object:", studentCourse);
