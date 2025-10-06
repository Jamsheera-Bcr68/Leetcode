var findTheDistanceValue = function(arr1, arr2, d) {
    let count=0
    for(let num of arr1){
        let issatisfy=true
        for(let n of arr2){
            if(Math.abs(num-n)<=d){
                console.log(num,n);
                
                issatisfy=false
                break
            }
        }
        if(issatisfy)count++
    }
    return count
};
let res=findTheDistanceValue([4,5,8],[10,9,1,8],2)
console.log(res);