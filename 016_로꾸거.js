// 문제 : 입력 문장을 거꾸로 출력

const string = prompt('문장을 입력하세요.');

const reverseString = string.split('').reverse().join('');
console.log(reverseString);

// split() : 문자열을 배열로 만들어 반환
// reverse() : 배열의 순서를 반전 - 원본 배열 변형
// join() : 배열의 원소를 모두 붙여 문자열로 반환

// join() 메서드

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"

console.log(elements.join('')); // "FireAirWater"

console.log(elements.join('-')); // "Fire-Air-Water"
