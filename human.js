function Human(name,surname,age){
    this.name = name;
    this.surname=surname;
    this.age=age;

    this.print = ()=> {
        console.log('Name:',this.name,',','Surname:',this.surname,',','Age:',this.age)
    }
}

exports.Human = Human