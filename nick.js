function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = input[line++].trim().split("")
        
        console.log(nickhack(n));
    }

   
  }
  function nickhack(n){
       for(var i=0;i<n.length;i++){
           if(n[i]==1||n[i]==0)
              return "Yes"
           else if(n[i]==2 && n[i+1]==0)
               return "Yes"
           else 
              return "No"
           
       }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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