let params: [string, number];
params=['Hidran',45];
/* params=[4,6]  errore */
function showData(params:[string,number]){
  console.log(params[0]+', ' + params[1]);
}
showData(params);