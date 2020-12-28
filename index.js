const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record){
  let r = record.find( res => res === "W")
  if(r){
  return r.year;}
  else if(!r){
  return 'undefined';
}}
