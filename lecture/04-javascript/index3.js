// Chap. 1)
// 변수 선언 : 변수 정의
// 변수 할당 : = 연산자를 이용해 값을 넣음.
// 초기화 : 변수에 처음 할당하는 순간.

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언, 재선언이 가능하며, 예기치 못한 값을 반환할 수 있음.
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// Chap. 2)
// 변수 선언 키워드 #1 - var
var a; // 변수 선언
console.log(a);
a = 2; // 변수 할당
console.log(a); // 변수 값 출력 (2)

var a2 = 4; // 변수 선언 & 할당
console.log(a2); // 4

var a2 = 5;
console.log(a2); // 5

////////////////////////////////////////////////////////

// ** var 변수의 문제점 **
// 1. 중간의 같은 이름의 변수를 다시 선언해도 기존의 변수에 덮어 씌움.
// - 변수를 선언 했다는 것은 분명히 다른 데이터를 넣으려는 것인데
//    그것을 기존의 데이터에 덮어 씌우면?! -> 문제 발생
// 2. 변수가 {블록 단위} 에서 끝나는 것이 아니라, 자기 마음대로 전역으로 돌아다니면서 영향력을 행사함. -> 의도치 않은 문제 발생.
// 3. 호이스팅 문제
// - 따라서 ES6 문법 부터는 var 대신 let 사용을 권장한다.

// ** 참고)
// Q) ES6가 뭔가요?
// A) JS의 표준 버전 중 하나. (JS 주요 업데이트)

/////////////////////////////////////////////////////////

// 변수 선언 키워드 #2 - let
let b; // 변수 선언
console.log(b); // undefined
b = 7; // 변수 할당
console.log(b); // 변수 값 (7)

let b2 = 77; // 변수 선언 & 할당
console.log(b2); // 77
// let b2 = 78; // error: let 키워드는 중복 선언 불가능
b2 = 78; // 변수 재할당 가능!

// 변수 선언 키워드 #3 - const
// -> 변수 선언과 할당이 동시에 !!! (반드시)
// -> 변하지 않는 값을 변수에 저장할 때 사용 (상수)
// const c; // error: const 키워드는 선언과 할당을 반드시 동시에 해야한다!!

const c = 3;
console.log(c); // 3
// c = 33; error: const 변수는 재할당이 불가능!





/////////////////////////////////////////////////////////
// Chap. 4) 
// ** 호이스팅
// JavaScript에서 변수 및 함수 선언이 코드의 최상단으로 올려지는 현상.
// -> 변수와 함수의 선언이 실제 코드의 실행 전에 처리.
// -> 이는 코드를 이해하고 예측하는 데 혼란을 줄 수 있음.

// Ex)
// console.log(x); // undefined
// var x = 10;
// console.log(x); // 10

// 실제 JS 엔진 이렇게 해석함.
// var x; // 변수 선언 (호이스팅)
// console.log(x); // undefined
// var x = 10;
// console.log(x); // 10


// 변수 x가 선언되기 전에 사용되었지만, JS 엔진은 선언을 최상단에 올려서 undefined를 출력한 후, 나중에 변수를 초기화 하여 값을 할당
// 변수 및 함수는 사용하기 전에 반드시 선언하는 것이 좋다.

// let, const 키워드는 호이스팅을 줄이고 블록스코프를 제공하여 변수의 유효 범위를 명확히 함.
/////////////////////////////////////////////////////