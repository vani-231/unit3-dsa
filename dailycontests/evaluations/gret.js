function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    printNGE(arr,n)
  }
  function printNGE(arr, n)
      {
          var arr1 = []
          var count = 0
        var next, i, j;
        for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] > arr[j])
            {
              next = arr[j];
              break;
            }
          }
          arr1.push(next); 
        }
        //console.log(arr1);
        for(var i = 0; i < arr1.length; i++){
            if(arr1[i] == -1){
                count++;
            }
        }
        console.log(count);
      }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5
    4 2 1 3 7`);
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