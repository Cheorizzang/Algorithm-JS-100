// 주어진 숫자가 소수이면 YES로, 소수가 아니면 NO로 출력
// 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수

const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
    for (let i = 2; i < num; i++) {
        const result = num % i;
        if (result === 0) {
            console.log('NO');
            return;
        }
    }
    if (num === '1') {
        console.log('NO');
        return;
    }
    console.log('YES');
}

check_prime(num);

// return
// return; 시 undefined 반환
// 조건을 만족하면 해당 함수에서 빠져나감
// 함수 안에서 함수를 호출하는 쪽으로 데이터 전달(반환)
