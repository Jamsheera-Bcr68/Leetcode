var duplicateZeros = function(arr) {
    let n=arr.length
 for( let i=0;i<arr.length;i++){
    let j=n
    if(arr[i]==0){
        while(j>i+1){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=0
        i++
    }
 }
 
};
let arr=[1,0,2,3,0,4,5,0]
console.log(duplicateZeros(arr));
