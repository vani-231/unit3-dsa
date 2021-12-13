function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        sumarr(n,arr,0,0)
    }
   
  }
  function sumarr(n,arr,i,sum){
      
      if(i==n){
          console.log(sum);
          return
      }
      sum += arr[i]
      return sumarr(n,arr,i+1,sum)
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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