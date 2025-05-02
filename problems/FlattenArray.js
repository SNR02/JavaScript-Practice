function flatArray(arr, result=[]){
    for(let i=0;i<arr.length; i++){
        if(Array.isArray(arr[i])){
            console.log(result)
            flatArray(arr[i],result);
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
let a = [1,2,3,[4,5,[6,7,8,[9],10,[11,[9,[9,0,7],0,8]],12,13],[14,15],16],17]
let flattenedArray = flatArray(a);
console.log(flattenedArray);
