// 문제 : Date 객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환
// 이를 이용하여 현재 연도를 출력하기

const d = new Date();

let year = d.getTime();
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;
// 3600 : 1시간을 초로 변환
// ms : 1/1000초
// Math.floor : 소수점 이하 없애기
console.log(year);
