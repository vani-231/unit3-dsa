function runProgram(input) {
    // Write code here
    var n = +input
    // function financial(x) {
    //     return Number.parseFloat(x).toFixed(2);
    //   }
    console.log( fact(n).toFixed(4))
    
   
  }

  
    function fact(n)
    {
        if (n == 1)
            return 0;
        return fact(n - 1) + Math.log(n);
    }
    
    
   
       
  
  if (process.env.USERNAME === "DELL") {
    runProgram(`3`);
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