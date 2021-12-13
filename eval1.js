function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ")
        nextsmall(n,arr);
    }
   
  }

  function nextsmall(n,arr){
      //arr.sort()
      var next =0;
      for(var i=0;i<n;i++){
          next = -1;
          for(var j=i+1;j<n;j++){
              if(arr[i] > arr[j]){
                  next = arr[j];
                  break;
              }
          }
          
          console.log(next);
      }
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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


// function runProgram(input) {
//     // Write code here
//     input = input.trim().split("\n")
//     var [n,m] = input[0].trim().split(" ").map(Number)
//     var mat = []
//     var line = 1;
//     for(var i=0;i<n;i++){
//         mat.push(input[line++].trim().split(" ").map(Number))
//     }
//     flip(mat,n,m)
   
//   }
//   function flip(arr,n,m){
//       for(var i=0;i<n;i++){
//           var ans = ""
//           for(var j=0;j<m;j++){
//               if(arr[i][j]==0)
//                   ans += '1'+" "
//               else 
//                 ans += '0'+" "
//           }
//           console.log(ans );
//       }
    
//   }
//   if (process.env.USERNAME === "DELL") {
//     runProgram(`3 2
//     1 0
//     0 1
//     1 1`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }


// function runProgram(input) {
//     // Write code here
//     input = input.trim().split("\n")
//     var n = +input[0]
//     var arr1 = input[1].trim().split(" ").map(Number)
//     var arr2 = input[2].trim().split(" ").map(Number)
//     var sum = 0;
//     for(var i=0;i<arr1.length;i++){
//         sum += arr1[i]
//     }
//     console.log(sum-1);
   
//   }
//   if (process.env.USERNAME === "DELL") {
//     runProgram(`3
//     3 2 1
//     1 3 2`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }