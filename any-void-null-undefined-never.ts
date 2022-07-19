//any,void,null,undefined,never

let age:any=25;
age='45';
age=[];

let userData: any[][45,'Hidran','Arias', {address:'Torino'}];

userData=['444',[],{}];
//void
let myAge: void= undefined;
userData=undefined;

let myAge: number;

function printName(): void{
  console.log('error');
}
 printName();
 function returnNever():never{
   throw new Error('No values defined');
 }
 returnNever();