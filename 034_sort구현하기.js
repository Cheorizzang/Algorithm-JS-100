// 문제 : 키가 오름차순으로 입력되면 'YES', 아니면 'NO' 출력하기

const unsorted = prompt('키를 입력하세요');
let sorted = '';

sorted = unsorted
    .split(' ')
    .sort(function (a, b) {
        return a - b; // 내림차순 : return b - a;
    })
    .join(' ');

if (unsorted === sorted) {
    console.log('Yes');
} else {
    console.log('No');
}

// sort() : 문자열만 제대로 오름차순해줌. 숫자는 X.
