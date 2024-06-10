/**
 * js 엔진, 구글 : v8 + c++ = node.js, 브라우저 밖에서 js
 * 모듈에는 사용자 만든 모듈, 시스템 모듈, 빌드인
 */
// const add = () =>{
//     return a+b
// }
// export해서 다른 파일이 불러와서 사용할 수 있게끔
// 모듈단위, 불러올 때 require() -> commonJS , es6 (import)

// console.log(__dirname);
// console.log(__filename);
// const add = require('./add');
// console.log(add(1,2));
// console.log('From index.js');

// scope (범위) 모듈은 각각의 범위를 가지고 있다
// require('./batman');
// require('./superman');


// 모듈의 기초형태

// ()() 함수의 자동실행
(function(){
    const superHero = "Superman";
    console.log(superHero);
})()
// 모듈의 형태
(function(exports, require, module, __filename, __dirname){

})