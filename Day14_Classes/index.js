// Day 14: Classes
// Tasks/Activities

// Activity 1: Class Definition
// Task 1: Define a class 'Person' with properties 'name' and 'age', and a method to return a greeting message. Create an instance of
// the class and log the greeting message
class Person {
  constructor(name, age, firstName, lastName) {
    this.name = name;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello ${this.name}, ${this.age}`;
  }
  updateAge() {
    return (this.age = 29);
  }
  static staticMethod() {
    return `I am inside a static method`;
  }
  getter() {
    return `Full name: ${this.firstName} ${this.lastName}`;
  }
  setter(fullname) {
    const [firstName, lastName] = fullname.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const firstInstance = new Person("John", 24);
console.log(firstInstance.greeting());
// Task 2: Add a method to a 'Person' class that updates the age property and logs the updated age
console.log("Updated age >>>", firstInstance.updateAge());

// ------------------------------------------------------------------------------------------------------------

// Activity 2: Class Inheritance
// Task 3: Define a class 'Student' that 'extends' a 'Person' class. Add a property 'studentId' and a method to return the student ID.
// Create an instance of the 'student' class and log the student ID.
class Student extends Person {
  constructor(StudentId, no_OfStudent) {
    super();
    this.StudentId = StudentId;
    Student.no_OfStudent++;
  }
  printStudentId() {
    return `Student id >>> ${this.StudentId}`;
  }
  greeting() {
    return `Hello my studend ID is :${this.StudentId}`;
  }
  static no_OfStudent = 0;
}
const student1 = new Student("123Abc");
console.log(student1.printStudentId());
// Task 4: Override the greeting method in the 'Student' class to include the student ID in the message. Log the overridden greeting message
console.log(student1.greeting());

// ------------------------------------------------------------------------------------------------------------

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the 'Person' class that returns a generic greeting message. Call this static method without creating
// an instance of the class and log the message
console.log(Person.staticMethod());
// Task 6: Add a static property to the 'Student' class to keep the track of the number of students created. Increment this property in
// the constructor and log the total no of students
const student2 = new Student();
const student3 = new Student();
console.log("No of student created >>>", Student.no_OfStudent);

// ------------------------------------------------------------------------------------------------------------

// Activity 4: Getters & Setters
// Task 7: Add a getter method to the 'Person' class to return the full name (assume a firstName and lastName property ). Create an
// instance and log the full name using getter.
const Person1 = new Person("", "", "John", "Cena");
console.log(Person1.getter());
// Task 8: Add a setter method to the 'Person' class to update the name properties (firstName and lastName). Update the name using
// setter and log the updated full name
Person1.setter("Bruce Wayne");
console.log(Person1.getter());

// ------------------------------------------------------------------------------------------------------------

// Activity 5: Private Fields (Optional)
// Task 9: Define a class 'Account' with private fields for 'balance' and a method to deposit and withdraw money. Ensure that the balance
// can only be updated through these methods.
class Account {
  #balance = 0;
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return this.#balance;
    } else {
      return "Invalid deposit amount";
    }
  }
  withdraw(amount) {
    this.#balance -= amount;
    return this.#balance;
  }
}

const myAccount = new Account();
console.log(myAccount.deposit(20000));
console.log(myAccount.withdraw(2000));

// -------------------------------------------------------------------------------------------------
// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).

// Achievement:

// By the end of these activities, students will:

// . Define and use classes with properties and methods.
// . Implement inheritance to extend classes.
// · Utilize static methods and properties.
// · Apply getters and setters for encapsulation.
// · Understand and use private fields in classes (optional).
