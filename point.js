var x,y;
function Point(x,y)
{
    this.x=x;
    this.y=y;
    this.print = ()=>{
        console.log('X = '+this.x+" Y = " + this.y);
    }
}



module.exports = {
    x : x,
    y : y,
    Point : Point
}