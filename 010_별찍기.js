// 문제

// 입력 : 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// 풀이

const level = 5;

for (let i = 1; i <= level; i++) {
    // tree 변수 초기화
    let tree = '';
    // 공백 증가 for문
    for (let k = 1; k <= level - i; k++) {
        tree += ' ';
    }
    // 별 증가 for문
    for (let j = 1; j <= i * 2 - 1; j++) {
        tree += '*';
    }
    console.log(tree);
}
