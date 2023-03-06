// 문제 : 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 출력하기
// 2020년 1월 1일은 수요일
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT

// 제한 조건
// 2020년은 윤년
// 2020년 a월 b일은 실제로 있는 날

const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const theDay = new Date('2020-' + a + '-' + b);
    return day[theDay.getDay()];
}

console.log(solution(month, date));
