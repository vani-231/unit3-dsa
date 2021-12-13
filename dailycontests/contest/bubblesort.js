function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    buble(arr,n)
    console.log(arr.join(" "));
    
   
  }

  function buble(arr,n){
    if (n == 1)
    return;


 
for (var i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1])
    {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
   buble(arr, n - 1);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5
    3 0 5 7 4`);
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