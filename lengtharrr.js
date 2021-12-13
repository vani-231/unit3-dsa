function runProgram(input) {
    // Write code here
    var str = input.trim().split("")
    var n = str.length
    strlength(str,0,0,n)
    

}
function strlength(str,res,i,n){
   if(i==n){
       console.log(res);
       return 
   }
   res++
   return strlength(str,res,i+1,n)
    

}
  if (process.env.USERNAME === "DELL") {
    runProgram(`masaischool`);
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