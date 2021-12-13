function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        console.log(printunique(n,arr));
    }
   
  }

  function printunique(n,arr){
    //   var obj = {}
    //   for(var i=0;i<n;i++){
    //       var char = arr[i]
    //       if(obj[char]===undefined){
    //           obj[char]  = 1
    //       }
    //       else{
    //           var pre = obj[char]
    //           obj[char] = pre+1
    //       }
    //   }
    //   //return obj
    //   for(var key in obj){
    //       if(obj[key] == 1){
    //           return key;
    //       }
    //   }

    var out = arr[0]
    for (var i=1;i<n;i++){
        out = out ^ arr[i]
    }
    return out 
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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