// // 내장 객체 Date를 이용해서 오늘이 평일인지 주말인지 콘솔창에 출력해주세요.
let now = new Date();
let day = now.getDay();

if (day >= 1 && day <= 5) {
    console.log("평일입니다.");
} else {
    console.log("주말입니다.");
}

// 랜덤 숫자 뽑기
console.log(Math.floor(Math.random() * 11));



// // new Date(timestamp)
// let jan_01_1970 = new Date(0);
// console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900

// let jan_02_1970 = new Date(24 * 3600 * 1000);
// console.log(jan_02_1970); // 24시간

// // new Date(date_string)
// let date = new Date('2024-06-03');
// console.log("date >", date);

// let date2 = new Date('2024', '06', '03'); // MM(0(1월) ~ 11(12월) 주의)
// console.log("date2 >", date2);

// // 관련 메서드
// // 객체 점 접근법
// // getDate(): 월의 몇 번째 날인지 반환합니다.
// // getDay(): 주의 몇 번째 날인지 반환합니다. (0부터 시작)
// // getMonth(): 몇 번째 달인지 반환합니다. (0부터 시작)
// // getHours(): 시간을 반환합니다. (0부터 23까지)
// // getMinutes(): 분을 반환합니다. (0부터 59까지)
// // getSeconds(): 초를 반환합니다. (0부터 59까지)
// // getMillisecons(): 밀리초를 반환합니다. (0부터 999까지)
// // getTime(): 1970년 1월 1일부터 현재까지의 밀리초 단위의 시간을 반환합니다.

// console.log(now.getFullYear()); // 2024
// console.log(now.getMonth() + 1); // 0 ~ 11 주의
// console.log(now.getDate()); // 3
// console.log(now.getHours()); // 13
// console.log(now.getMinutes()); // 38
// console.log(now.getSeconds()); // 39
// console.log(now.getMilliseconds()); // 0 ~ 999
// console.log(now.getDay()); // 0(일) ~ 6(토)