function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        absolute(arr.length,arr,0,0)
    }
   
  }
  function absolute(n,arr,i,res){
    
        if(i==n-1){
            console.log(res);
            return 
        }
        res += Math.abs(arr[i]-arr[i+1])
        absolute(n,arr,i+1,res)
        
    
     
}
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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