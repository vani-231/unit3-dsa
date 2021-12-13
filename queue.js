function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var [n,k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
         console.log(sum(n,k,arr));
    }
   
  }

  function sum(n,k,arr){
      var one = 0;
      var two = 0;
      while(one < arr.length && two < arr.length){
          var temp = arr[two] - arr[one]
        if(temp == k && one!=two) {
          if(temp < k)
             two++;
           else{
               one++;
           }
        }
          return false;
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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