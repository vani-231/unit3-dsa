function runProgram(input) {
    // Write code here
    var [n,r] = input.trim().split(" ").map(Number)
    console.log(n,r);
    for(var i=0;i<n;i++){
         var ans = 1+(1%r^n)
    }
    console.log(ans + ".0000");
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1 1`);
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