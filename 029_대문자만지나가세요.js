// 문제 : 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하기

const alphabet = prompt('알파벳을 하나만 입력하세요.');

if (alphabet === alphabet.toUpperCase()) {
    console.log('YES');
} else {
    console.log('NO');
}
