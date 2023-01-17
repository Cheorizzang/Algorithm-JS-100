// 문제 : 입력으로 주어지는 이름을 '안녕하세요. 저는 XXX입니다.'로 출력하기

const name = prompt('이름을 입력하세요.');

console.log(`안녕하세요. 저는 ${name}입니다.`);

// ES6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다.
// 이를 템플릿 리터럴(Template literals)이라 합니다.
