interface IUser{
  lastName: string;
  firstName: string;
}

function showUser(user:{lastName:string,firstName:string}){
  console.log(user.firstName+', '+ user.lastName);
}

function showUser2(user: IUser){
  console.log(user.firstName+', '+ user.lastName);
}
showUser({lastName:'Arias',firstName:'Hidran'})
showUser2({lastName:'Arias',firstName:'Hidran'})


interface IUser2{
  lastName: string,
  firstName: string,
  adress?: string
}

 function showUser3(user:IUser3){
   console.log(user.firstName+', '+ user.lastName)
 }
 showUser3({lastName:'Arias',firstName:'Hidran'})


 interface IUser3{
  lastName: string,
  firstName: string,
  adress?: string,
  [propName:string]: any
}
function showUser4(user:IUser3){
  console.log(user.firstName+', '+ user.lastName+', '+ user.age)
}
showUser4({lastName:'Arias',firstName:'Hidran'})