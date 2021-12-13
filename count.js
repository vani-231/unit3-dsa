function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
     console.log(count(n,k,arr))
   
  }
  function count(n,k,arr){
      var count = new Array(k+1)
      count.fill(0)
      count[0]=1;
      for(var i=1;i<=k;i++){
          for(var j=0;j<arr.length;j++){
              if(i>=arr[j]){
                  count[i] += count[i-arr[j]]
              }
          }
      } return count[k]
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`4 14
    12 13 1 9`);
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