//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}

	getName(){
		return this._name;
	}
	setAge(age){
		this._age=age;
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
console.log(person._name);
person.setAge(30);
console.log(person._age)
let student=new Student("Pavani",24);
student.study();
let teacher = new Teacher("Accio", 50);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
