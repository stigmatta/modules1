//1
{
    var point = require ('./point')

    var points = require('./pointParallels')

    var A = new point.Point(3,3);
    var B = new point.Point(3,5);

    A.print();
    B.print();

    points.parallel(A,B)
}


//2
{
    var human = require('./human')
    var Human1 = new human.Human('Andrey','Odintsov','19')
    Human1.print()
}


//3
{
    var fraction = require('./fraction')
    var Fraction1 = new fraction.Fraction(3,5);
    var Fraction2 = new fraction.Fraction(4,5);
    Fraction1.print();
    Fraction2.print();

    var calc = require('./fractionCalc')
    var newFraction = calc.Sum(Fraction1,Fraction2);
    newFraction.print()

}

//4
{
    var student = require('./student')
    var Student1 = new student.Student('Andrey','Odintsov',19,3)
    var Student2 = new student.Student('Ivan','Ivanov',18,2)

    var journal = require('./journal')
    var newJournal = new journal.Journal(Student1,Student2)
    newJournal.print()

    var Student3 = new student.Student('Alexander','Petrov',20,4)
    newJournal.addStudent(Student3);
    
    newJournal.print()

    newJournal.deleteStudent(1);
    newJournal.print()
    


}

