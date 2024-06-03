// 실습. 주말과 평일
let now = new Date();
let day = now.getDay();

if (day === 0 || day === 6) {
    console.log("오늘은 주말입니다.");
} else {
    console.log("오늘은 평일입니다.");
}

// // 실습. 난수 생성
console.log(Math.floor(Math.random() * 11));