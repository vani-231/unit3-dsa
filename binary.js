function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++];
       console.log( bin(n));
    }
   
  }
  function bin(n)
    {
      //return (n >>> 0).toString(2);
      if(n>=1){
          if(n%2){
            return bin((n-1)/2) +1;
          }else{
            return bin(n/2)+0;
          }
      }else
         return '';
    }
     
    

  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    15
     128`)
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