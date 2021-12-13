function runProgram(input) {
   var [n,k] = input.trim().split(" ").map(Number)
   //console.log(n,k);
    makcomb(n,k);
   
  }
  var ans = []
      var temp = []
      var res = []
  function comb(n,left,k){
      
      if(k==0){
          ans.push(temp)
          for(var i=0;i<temp.length;i++){
               res.push(temp[i])
              //console.log(temp[i]);
          }
          return res;
      }
      for (var i=left;i<=n;++i){
         temp.push(i)
         comb(n,i+1,k-1) 
         temp.pop();         
      }

  }
  function makcomb(n,k){
      comb(n,1,k)
      return ans;
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`4 2`);
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