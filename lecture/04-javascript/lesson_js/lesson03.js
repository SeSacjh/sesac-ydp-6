// *실습*
// Quiz) 학점 계산기 (switch)
// 조건) 0~100 외 숫자는 들어오지 않는다고 가정
        //  A ~ F 등급
// 힌트) number / parseInt() , 10


let score = prompt('점수를 입력해주세요');

switch(parseInt(score/10)) {
    case 9: case 10:
        console.log("A학점");
        break;
    case 8:
        console.log("B학점");
        break;
    case 7:
        console.log("C학점");
        break;
    case 6:
        console.log("D학점");
        break;
    default:
        console.log("F학점");
        break;
}