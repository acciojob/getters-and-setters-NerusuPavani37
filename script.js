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

let student=new Student("Pavani",24);
student.study();
let teacher = new Teacher("Accio", 50);
teacher.teach();
teacher.setAge(40);
console.log(teacher.age);


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
