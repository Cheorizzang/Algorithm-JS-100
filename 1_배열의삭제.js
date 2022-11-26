var nums = [100, 200, 300, 400, 500];

// 1. pop() 사용 : 마지막 요소를 삭제하고 반환 -> 원본 배열 건듦

nums.pop(); // 500
nums.pop(); // 400
console.log(nums);

// 2. splice() 사용 : 시작할 인덱스, 삭제할 개수를 정해서 삭제한 요소 반환 -> 원본 배열 건듦
console.log(nums.splice(0, 3));

// 3. filter() 사용 : 콜백함수를 이용해서 특정 조건에 맞는 새로운 배열 반환 -> -> 원본 배열 안 건듦
console.log(nums.filter((i) => i !== 400 && i !== 500));
