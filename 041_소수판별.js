// 주어진 숫자가 소수이면 YES로, 소수가 아니면 NO로 출력
// 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수

const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
    for (let i = 2; i < num; i++) {
        const result = num % i;
        if (result === 0) {
            console.log('NO');
            return false; // return true로 하면 아래의 코드가 실행이 안되는 이유?
        }
    }
    if (num === 1) {
        console.log('NO');
        return; // 위의 조건을 만족하면 해당 함수를 중단시킴
    }
    console.log('YES');
}

check_prime(num);

// return vs return flase
// return; 시 undefined 반환
// return의 값을 정확하게 전달해주는게 좋음
// return : 함수 안에서 함수를 호출하는 쪽으로 데이터 전달(반환)
