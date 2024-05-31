// 실습 1) 2의 배수 또는 5의 배수 구하기
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if ((i % 2 === 0 || i % 5 === 0)) {
        sum += i;
    }    
}
console.log(sum);

// 실습 2) 13의 배수 구하기
for (let i = 1; i < 10000; i++) {
    if (i % 13 === 0 && i % 2 !== 0) {
        console.log(i);
    }    
}

