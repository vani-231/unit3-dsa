function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0]
    var line = 1
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split("").map(Number);
        count(n,arr);
    }
   
  }

  function count(n,arr){
      var num = "0123456789"
      var obj= {}
      for(var i=0;i<arr.length;i++){
        if(obj[arr[i]]==undefined){
           obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++
        }
      }
      //console.log(obj);
      for(key in obj){
        for(var j=0;j<num.length;j++){
            if(key == num[j]){
                    console.log(num[key]);
            }
        }
        

    }

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    5
    21321
    6
    235452`);
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