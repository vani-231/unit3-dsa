function runProgram(input) {
    // Write code here
   
    input = input.trim().split("\n")
    var n = +input[0]
    var str = input[1].trim().split("")
    gensubseq(n,str,"")
    
  }
 function gensubseq(n,str,res){
      if(str.length==0){
          console.log(res);
          return
      }
      gensubseq(str.substring(1),res)
      gensubseq(str.substring(1),res + str.charAt(0))
 }

  if (process.env.USERNAME === "DELL") {
    runProgram(`4
    abcd`);
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