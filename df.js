function bubble(arr){
    let n = arr.length;

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let result = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = result
            }
        }
    }
    return arr;
}
let m = [1, 6, 4, 3, 5, 2, 7, 9, 8];
console.log(bubble(m));     