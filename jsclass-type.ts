class MyLogger{
 log(msg:string):void{
   console.log(msg);
 }
 generateId():number{
   return Math.round(Math.random()*1000000)
 }
}

interface MyLog extends MyLogger{
  email: string;
}

class MyMailLogger implements MyLog{
  email:string;
  log(){

  }
  generateId(){
    return 1;
  }
}
let mailLog: MyLogger;
function logData(logger:MyMailLogger){
  return logger.generateId();
}
 mailLog=new MyMailLogger();