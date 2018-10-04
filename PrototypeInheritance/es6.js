class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  static sayHi() {
    return 'Hi!';
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}
const mary = new Person('Mary', 'Thompson');
const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(mary);
console.log(john);