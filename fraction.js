function Fraction(numerator,denominator){
    this.numerator = numerator
    if(denominator !== 0)
    {
        this.denominator = denominator
    }

    this.print = ()=>{
        console.log(numerator,'/',denominator)
    }
}

exports.Fraction = Fraction