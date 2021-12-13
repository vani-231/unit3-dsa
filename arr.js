var arr = [1,2,3,4]
function print(n,arr,i,res){
    if(i==n-1){
        console.log(res);
        return 
    }
    res += Math.abs(arr[i]-arr[i+1])
    print(n,arr,i+1,res)
    
}
 
print(arr.length,arr,0,0)