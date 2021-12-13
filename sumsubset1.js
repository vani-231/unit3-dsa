function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    console.log(printsubset(n,arr));
   
  }

  function printsubset(n,arr){
    let result = 0;
 
    for(let i = 0; i <= n - 1; i++)
    {
        let val = 0;
        for(let j = i; j <= n - 1; j++)
        {
            val = val + arr[j];
             
            if (val % 2 != 0)
                result++;
        }
    }
    return (result);

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    2 4`);
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