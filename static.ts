class MathCalc{
static readonly PI= 3.14159;
static readonly rate= 1.12;
static calcCirclePerimeter(r:number){
  return 2* MathCalc.PI*r;
}
calEuroToDollar(euro:number){
  MathCalc.rate*euro;
}
}
let calc=new MathCalc();
console.log(MathCalc.PI)

console.log(MathCalc.calcCirclePerimeter(2))
console.log('120 euro are '+ calc.calEuroToDollar(120)+ 'Dollars')
