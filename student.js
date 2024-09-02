function Student(name,surname,age,course){
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.course = course

    this.print = ()=>{
        console.log('Name:',this.name,',','Surname:',this.surname,',','Age:',this.age,',','Course:',this.course)
    }
}

exports.Student = Student