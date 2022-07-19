//abstract classes
abstract class Logger{
abstract log(msg:string): void
generateId():number{
 return Math.round(Math.random()*100000)
}
}

interface Log{
  msg:string;
  id:number;
  getMsg():string;
}
 class ConsoleLogger extends Logger implements Log{

msg: string='';
id: number=0;
log(msg: string): void {
console.log(msg);
}
getMsg(){
  return this.msg;
}
 }
 let Clog=new ConsoleLogger();
 Clog.log('logging to console')

 console.log(Clog.generateId())

