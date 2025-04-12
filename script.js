//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	getName(){
		return this.name;
	}
	setAge(age){
		this.age=age;
	}
}

class Student extends Person {
  constructor(name,age){
    super(name,age);
  }
	study(){
		let name = super.getName();
		console.log(name + " is studying")
	}
}

class Teacher extends Person {
   constructor(name,age){
    super(name,age);
  }
	teach(){
		let name = super.getName();
		console.log(name + " is teaching");
	}
}
let person = new Person("John", 25);
console.log(person.name);
person.setAge(30);
console.log(person.age)
let student=new Student("Alice",30);
student.study();
let teacher = new Teacher("Alice", 30);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
