var merge = function(nums1, m, nums2, n) {
    let right=n+m-1
    let left=m
    while(left>=0&&n-1>=0){
        if(nums1[left]<nums2[n-1]){
            nums1[right]=nums2[n-1]
            n--
           
        }else{
            nums1[right]=nums1[left]
            left--
        }
        right--
    }
}

let nums1=[0]
let nums2=[1]
let m=0,n=1

merge(nums1,m,nums2,n)
console.log(nums1);


