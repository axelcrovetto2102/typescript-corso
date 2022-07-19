enum DAYS{
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}
console.log(DAYS.SAT)

function isWorkingDay(day: DAYS){
if(day===DAYS.SAT|| day===DAYS.SUN) return true;
else true;
}
 console.log(isWorkingDay(DAYS.SAT));

 