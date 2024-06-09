/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB :', AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB :', AorB);

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue :', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisISFalsy: false };
console.log('whichFalsy :', whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisISFalsy: true };
console.log('whichTruthy', whichTruthy);
