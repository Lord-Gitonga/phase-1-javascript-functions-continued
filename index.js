// code your solution here
function saturdayFun (skate){
  var skate = "to roller-skate";
  const saturdaySpend = function () {
      return `This Saturday, I want ${skate}!`;
  }
  return saturdaySpend();
}
console.log(saturdayFun());


function saturdayFun1 (skate){
  var skate = "to bathe my dog"
  const saturdaySpend1 = function () {
      return `This Saturday, I want ${skate}!`;
  }
  return saturdaySpend1();
}
console.log(saturdayFun1());




function mondayWork (monday){
  var monday = "go to the office.";
  return `This Monday, I will ${monday}`;
}

console.log(mondayWork());

function mondayWork (monday){
  var monday = "work from home.";
  return `This Monday, I will ${monday}`;
}

console.log(mondayWork());


const wrapAdjective1 = function (result,emphatic) {
  return `You are ${result}${emphatic}${result}!`;
}
console.log (wrapAdjective1("*","a dedicated programmer"));


function wrapAdjective(result, emphatic) {

  return `You are a ${result}${emphatic}${result}!`;
}
console.log (wrapAdjective("||","a dedicated programmer"));
