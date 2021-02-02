const arr=[1,2,3];
const arr1=[9,3,4,7];

// function square(arr){
//    const newarr=[];
//    for(let i=0;i<arr.length; i++){
//        const element=arr[i];
//        const re=element * element;
//        newarr.push(re);
//    }
//    return newarr;
// }
// function square(element){
//     return element*element;
// }
const result=arr.filter(x => x*x);
console.log(result);
arr1.map(function(element, index , array){
    console.log(element,index ,array);
})
