function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr =  input[1].trim().split(" ").map(Number)
    equation(n,arr)
   
  }

  function equation(n,arr){
      var esum = 0;
      var osum = 0;
      var A = 2;
      var B = 3;
      for (var i=0;i<n;i++){
          if(arr[i]%2==0)
              esum+= arr[i]
          else if(arr[i]%2==1)
               osum += arr[i]
          
      }
       var X= esum 
       var Y = osum ;
      var eq = A * (X) + B * (Y)
      console.log(eq);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5
    1 2 3 4 5`);
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