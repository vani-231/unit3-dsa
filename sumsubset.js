function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var n = +input[0]
    var set = input[1].trim().split(" ").map(Number)
    
    var count = 0;
    if (isSubsetSum(set, n) == true){
      count++;
    }
    console.log(count);
      
    
    

   
  }

  
    function isSubsetSum(set, n, sum)
    {
        
        // if (sum == 0)
        //     return true;
        // if (n == 0)
        //     return false;
  
        
        if (set[n - 1] %2!==0)
            return isSubsetSum(set, n - 1);
  
        
        return isSubsetSum(set, n - 1, sum)
          //|| isSubsetSum(set, n - 1, sum - set[n - 1]);
    }
     
    
    
  
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    1 2 3`);
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