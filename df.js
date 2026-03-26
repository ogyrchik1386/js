let n = 2;
let m = 5;
let med = Math.ceil(m / 2);
let matrix = [
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11]
];

for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "));
}
for (let i = 0; i < n; i++) {
    let k = 0;
    for (let j = 0; j < med; j++) {
        let result = matrix[i][j];
        matrix[i][j] = matrix[i][m - 1 - j];
        matrix[i][m - 1 - j] = result;
        k++;
    }

    let str = "";

    for (let j = 0; j < m; j++) {
        str += matrix[i][j] + " "

    }

    console.log(str);
    console.log();
}