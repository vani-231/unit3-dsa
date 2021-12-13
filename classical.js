function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var str = input[line++].trim().split("")
        balance(str)
    }
   
  }
  function balance(str){
      var stack = []
      var map;
      for(var i=0;i<str.length;i++){
          if(str[i]=='{'||str[i]=='['||str[i]=='('){
              stack.push(str[i])
          }
          else{
              if(stack.length==0){
                  return false;
              }
              if( map[stack.shift()] != str[i])
                  return false
                  stack.pop()
              
          }
      }
      if(stack.length == 0){
          console.log("bal");
      }else{
          console.log("unb");
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }