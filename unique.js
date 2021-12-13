function runProgram(input) {
    // Write code here
    var str = input.trim().split("")
    //console.log(str);
    str = str.split(' ')
    str = str.join('')
    var obj = {}
    for(var i=0;i<str.length;i++){
          obj[str[i]] = i
    }
    ans = ""
   for(let key in obj){
       ans += key
   }
   console.log(ans);

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`my name is ankush`);
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