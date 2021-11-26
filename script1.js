function Person(fname, lname, address) {
  this.FirstName = fname;
  this.LastName = lname;
  this.OfficeAddress = address;
  console.log(this.FirstName);
  console.log(this.LastName);
  console.log(this.OfficeAddress);
}
const person1 = new Person('Ravi', 'Teja', 'Eluru');
const person2 = new Person('Venkata', 'Jayanth', 'kadapa');
const person3 = new Person('Vamsi', 'Krishna', 'Warangal');
