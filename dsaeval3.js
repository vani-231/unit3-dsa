// function runProgram(input) {
//     // Write code here
//     input = input.trim().split("\n")
//     var test = +input[0]
//     var line = 1;
//     for(var i=0;i<test;i++){
//         var n = +input[line++]
//         var arr = input[line++].trim().split(" ").map(Number)
//         console.log(printsingle(n,arr));
//     }
   
//   }
//   function printsingle(n,arr){
//       var obj= {}
//       for (var i=0;i<n;i++){
//           var char = arr[i]
//           if(obj[char]===undefined){
//               obj[char] = 1;
//           }else{
//               obj[char]++;
//           }
//       }
//      for(var key in obj){
//          if(obj[key]==1){
//              return key
//          }
//      }
      
//   }

//   if (process.env.USERNAME === "DELL") {
//     runProgram(`2
//     1
//     5
//     5
//     1 2 1 3 2`);
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


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    
    sumsubset(n,arr);
   
  }
  function sumsubset(n,arr){
      var out = [];
      for(var i=0;i<n;i++){
          for(var j=i;j<n;j++){
              out.push(arr.slice(i,j))
          }
      }
      var x = []
      for(var k=0;k<out.length;k++){
          x.push(out[k])
      }
      var s= []
      for(var l =0;l<x.length;l++){
          s.push(x[l])
      }
      for(var m = 0;m<s.length;m++){
          if(s[m].length !== 0){
              console.log(s[m]);
          }
      }
      
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