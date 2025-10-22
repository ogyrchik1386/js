function ramNam() {
    return Math.floor(Math.random() * a);
}

function simvol() {
    for (let i = 0; i < player; i++) {
        r = ramNam();
        str += m[r];
    }
}

function request() {
    if (req == 1) {
        m = m1;
        a = 10;
    }
    if (req == 2) {
        m = m2;
        a = 9;
    }
    if (req == 3) {
        m = m3;
        a = 7;
    }
    if (req == 4) {
        m = mall;
        a = 26;
    }
}

let req = prompt('выберите строку на клавиатуре 1,2,3 или все"нажмите 4"');
let player = +prompt('введите количестко символов');
let p = +prompt('введите количество попыток');
let m1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let m2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
let m3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
let mall = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let r;
let str = '';
let result;
let start;

request()


simvol();

console.log(str)

while (true) {
    result = prompt('введите: ' + str);
    if (result == str) {
        alert('правельно');
        start = prompt('для продолжения нажмите 0');
        if (start != 0) {
            break
        } else {
            str = '';
            simvol();
        }
    } else {
        p--;
        alert('осталось количество попыток' + p);
        if (p == 0) {
            break
        }
    }
}