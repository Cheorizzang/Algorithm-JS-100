// 문제 : 첫번째 입력으로 제한 무게, 두번째 입력으로 친구들의 수 n이 주어진다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 무작위로 주어지는데, 총 몇 명 탈 수 있는지 출력하기

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i = 1; i <= n; i++) {
    total += parseInt(prompt('무게를 입력해주세요.'), 10);
    if (total <= limit) {
        count++;
    }
}

console.log(count);
