var fraction = require ('./fraction')

function Sum(A,B){
    if(A.denominator === B.denominator){
        return new fraction.Fraction(A.numerator + B.numerator,A.denominator);
    }  

    else{
        let commonDenominator = A.denominator*B.denominator
        return new fraction.Fraction(A.numerator*(commonDenominator/A.denominator)+B.numerator*(commonDenominator/B.denominator),commonDenominator)
    }
}

function Extract(A,B){
    if(A.denominator === B.denominator){
        return new fraction.Fraction(A.numerator - B.numerator,A.denominator);
    }  

    else{
        let commonDenominator = A.denominator*B.denominator
        return new fraction.Fraction(A.numerator*(commonDenominator/A.denominator)-B.numerator*(commonDenominator/B.denominator),commonDenominator)
    }
}

function Multiply(A,B){
    return new fraction.Fraction(A.numerator*B.numerator,A.denominator*B.denominator)
}

function Divide(A,B){
    return new fraction.Fraction(A.numerator*B.denominator,A.denominator*B.numerator)
}

module.exports = {
    Sum : Sum,
    Extract : Extract,
    Multiply : Multiply,
    Divide : Divide
}
