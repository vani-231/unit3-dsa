function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        nextbig(n,arr)
    }
   
  }
  function nextbig(n,arr){
      
    //   var next = 0;
    //   var ans = []
    //   for(var i=0;i<n;i++){
    //       next = -1
    //       for(var j=i+1;j<n;j++){
    //           if(arr[i]<arr[j]){
    //                next = arr[j]
    //                break;     
    //       }
    //     }
    //     ans.push(next)
    //   }
    //  console.log(ans.join(" "));
    var next;
    for(var a=0; a<n; a++) {
      next = -1;
      for(var b=0;b<n;b++) {
        if(arr[a] < arr[b]) {
          next = arr[b];
          break;
        }
      }
      console.log(next);
    }
    

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    5
    5 4 1 3 2
    6
    8 11 1 20 15 19`);
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