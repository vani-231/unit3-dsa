function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr =  input[1].trim().split(" ").map(Number)
     var res = quicksort(arr);
     console.log(res.join(" "));
  }
  function quicksort(arr){
      if(arr.length<=1){
          return arr;
      }
      var pivot = arr[0]
      var left = []
      var right = []
      for (var i=1;i<arr.length;i++){
         arr[i]>pivot ? left.push(arr[i]):right.push(arr[i])
          
      }
      return quicksort(left).concat(pivot,quicksort(right))

  }

  if (process.env.USERNAME === "DELL") {
    runProgram(`5
    2 3 1 4 5`);
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