function runProgram(input) {
    input = input.trim().split('\n');
    // var n = +input[0]
    // var arr = input[1].trim().split(" ").map(Number)
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        console.log(count(n));
    }
    
  }
  function count(n){
      var tab = new Array(n+1)
      for(var i=0;i<n+1;i++){
            tab[i] = 0;
      }
      tab[0] = 1;
      for(var i=1;i<n;i++){
          for(var j=i;j<=n;j++){
              tab[j] += tab[j-i]
          }
      }
      return tab[n];
      

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    5`);
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