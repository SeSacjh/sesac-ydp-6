// #1. setTimeout(code, delay)
// : delay 시간 동안 기다리다가 code 함수를 실행

// 실행 결과: 1 -> 3 -> 2
// => js에서는 setTimeout 함수를 사용했을 때, 기다리지 않고
// 바로 다음 구문을 실행함

// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 2000)
// console.log(3);

// ############################
// #2. 비동기처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황

// let product;
// let price;

// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다..');
// }

// function pickDrink() {
//     // setTimeout을 이용해 3초를 기다린 후에 코드 실행
//     setTimeout(function () {
//         console.log('고민 끝');
//         product = '제로 콜라';
//         price = 3000;
//     }, 3000)
// }

// function pay(product, price) {
//     console.log(`상품명: ${product} // 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);




// 여기 코드 붙여넣기



// #3. 콜백함수(callback) 로 문제를 해결해보자!
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// - js에서 어떤 함수의 매개변수로 대입되는 함수

// 목표: 콘솔로그 하나 찍고, 3초 뒤에 "고민 끝"이랑 상품명, 가격이 올바르게 출력
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink(callback) {
    // *callback 매개변수: 콜백함수가 들어올 예정
    setTimeout(function () {
        console.log('고민 끝');
        product = '제로 콜라';
        price = 3000;
        callback(product, price); // *매개변수로 받은 콜백 함수를 실행
    }, 3000)
}

function pay(product, price) {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

goMart();
pickDrink(pay);