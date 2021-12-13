function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var [n,sum] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log( rsum(arr, n, 0, sum, 0));
    
  }
  function rsum(arr, n, i, sum, count)
{
    
    if (i == n) {
 
        
        if (sum == 0) {
            count++;
        }
        return count;
    }
 
    
    count = rsum(arr, n, i + 1, sum - arr[i], count);
    count = rsum(arr, n, i + 1, sum, count);
    return count;
}
 


  if (process.env.USERNAME === "DELL") {
    runProgram(`4 10
    1 2 3 4`);
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