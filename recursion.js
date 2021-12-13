function factorial(n){
    if(n==0||n==1){
        return 1;
    }
    return n*factorial(n-1)
}
console.log( "factorial of 5 is " +  factorial(5))


function  fibanocci(n){
    if(n==0||n==1){
        return n;
    }
    return fibanocci(n-1)+fibanocci(n-2)
}
console.log("fibanocci " +  fibanocci(12))

function revrese(str,i,ans){
    if(i<0){
      console.log(ans);
      return 
    }
    ans = ans + str[i]
    revrese(str,i-1,ans)
}
console.log(revrese("vanihari",0,""));