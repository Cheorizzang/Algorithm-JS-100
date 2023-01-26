// 문제 : 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)  arr[i]
// 2)  arr.push(5)
// 3)  arr.slice() -> (X)
// 4)  arr.pop()
// 5)  arr.includes(5) -> (X)

// 시간 복잡도 : 알고리즘을 처리하는 데 걸리는 시간
// Big-O : 알고리즘의 성능을 수학적으로 표기해주는 표기법
// O(1) : Constant Time -> 입력 데이터의 크기에 상관없이 일정한 시간이 걸리는 알고리즘
// O(n) : Linear Time -> 입력 데이터의 크기에 비례해서 처리시간도 늘어나는 알고리즘
// O(n^2) : Quadratic Time -> 입력 데이터의 크기의 제곱만큼 처리시간이 걸리는 알고리즘
// O(log n) : 이진 탐색 등의 알고리즘을 표현할 때 사용

// 출처 : https://overcome-the-limits.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84-with-JavaScript

// slice(begin, end) : end 미포함
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1, 4));
// Expected output: Array ['bison', 'camel', 'duck']
