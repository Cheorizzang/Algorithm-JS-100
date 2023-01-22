// 문제 : 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력, 두번째 입력에서는 수학점수가 공백으로 구분되어 입력
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체 출력

const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);
