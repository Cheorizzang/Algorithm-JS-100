// 문제
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// var result = 빈칸을 채워주세요

var result = year.concat(
    '/',
    month,
    '/',
    day,
    ' ',
    hour,
    ':',
    minute,
    ':',
    second
);

console.log(result);

// 출력
// 2019/04/26 11:34:27

// concat : concatenate 연결하다, 잇다
// 1. 문자열을 합쳐서 새 문자열 반환 -> str1.concat(str2, str3, ...)
// 2. 배열을 합쳐서 새 배열 반환 -> arr1.concat(arr2, arr3, ...)
