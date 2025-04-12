//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}

	get name(){
		return this._name;
	}
	get age(){
		return this._age;
	}
	set age(age){
		this._age=age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
let person = new Person("John", 25);
console.log(person.get name());
person.setAge(30);
console.log(person.get age())
let student=new Student("Alice",22);
student.study();
let teacher = new Teacher("Bob", 40);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
