function runProgram(input) {
    // Write code here
   var n = +input
   console.log(steps(n));
  }
function steps(n){
    if(n==0||n==1){
        return 1;
    }
    else if(n===2){
        return 2;
    }
    return steps(n-1)+steps(n-2)+steps(n-3)
}

  if (process.env.USERNAME === "DELL") {
    runProgram(`30`);
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