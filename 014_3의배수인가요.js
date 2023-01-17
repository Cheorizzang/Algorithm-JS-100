// 문제 : 랜덤한 숫자 n이 3의 배수이면 '짝', 아니면 n 출력

const n = prompt('숫자를 입력하세요.');

if (n % 3 === 0) {
    console.log('짝');
} else {
    console.log(n);
}
