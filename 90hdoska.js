let dm = [
    [],
    []
]
const razmer = +prompt("задайте размер масива:");
let count = razmer;
let tochka;
for(let k = 1; k < razmer + 1; k++){
    tochka = +prompt("введите точку:");
    dm[0].push(tochka);
    dm[1].push(count);
    count--;

}

function bubble(arr,arr2){
    let n = arr.length;
    let result;
    let result2;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                result = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = result;
                
                result2 = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = result2;
            }
        }
    }
    return arr;
}

function sootnos(){
    bubble(dm[0],dm[1]);
}

sootnos();
console.log(dm);
alert(dm[1]);