var arr = [3,2,4,5,6,4,5,2,9,11]
var obj = {}
for (let i = 0; i <arr.length; i++) {
    obj[arr[i]] = i
    
}
console.log(obj);

// var n = 3
// var k = 2
// for(var i=0;i<n;i++){
//     var sum = []
//     var res = []
//     for (var j=i;j<n;j++){
//         if(prime(arr[j])){
//           sum.push(arr[j])
//         }
//     }
//     if(sum.length==k){
//         console.log(sum);
//     }
// }

// function prime(n){
//     var count = 0;
//     for (var i=0;i<n;i++){
//         if(n%i==0){
//             count++;
//         }
//     }
//     if(count==1){
//         return true;
//     }
//     return false
// }
 