const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let r = record.find( res => res === "W")
  if(r)
  return r.year;
  else 
  return undefined;
}
