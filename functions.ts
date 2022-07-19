//typed functions

 function myFunction(){

 }
 let myFunc= function(){

 }
 myFunc();

 let myArrowFunc=(e:any) => { console.log(e) }
 myArrowFunc('Hidran')
 let myArrowFunc2= (e:number) : number=> e*2
 console.log(myArrowFunc2(2));


 function func(x:string, y:number): void{

 }

 let myfunc2: (x:string, y:number) => void;
 myfunc2=func;
 myfunc2('ts',4);
 myfunc2=function(name:string, age: number): void{
   console.log(name)
 }
 myfunc2('Hidran', 45)