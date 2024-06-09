/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  let total = 0;

  /*for 문*/
  // for(let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  /*for ~ of 문*/
  // for(let value of args) {
  //   total += value
  // }

  /*forEach, 값 반환 안해서 return 쓸 필요 없음*/
  // args.forEach(function (price) {
  //   total += price
  // })

  /*forEach => arrow function*/
  // args.forEach((price) => (total += price));

  /*reduce*/
  // args.reduce(function (acc, cur) {
  //   total = acc + cur;
  //   return total;
  // },0)

  /*reduce => arrow function*/
  // 맨 앞에 reutrn문 쓴 것을 확인하세요! 원래는
  // const calc = (...rest) => args.reduce((acc, cur) => acc + cur, 0)
  // 이기 때문에 중괄호 안에서는 꼭 return을 붙여줘야함!
  return args.reduce((acc, cur) => acc + cur, 0);

  console.log(total);
  return total;
};

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);

// 화살표 함수와 this
// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에

const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    const sayHi = function () {
      console.log(this);
    };

    sayHi();
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

/*pow(numeric: number, powerCount: number): number;*/
// let pow = (numeric, powerCount) => {
//   let result = 1;

//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric;
//   }

//   return result;
// };

// 다른 방법
const pow = (numeric, powerCount) => {
  // Array(powerCount)// x개의 빈 배열이 만들어짐 [empty * x]
  // Array(powerCount).fill(null)// 찐 배열을 만들기 위해 null로 배열 채움 [null, null, .... , null]

  return Array(powerCount).fill(null).reduce(acc => (acc *= numeric), 1);};

/*repeat(text: string, repeatCount: number): string;*/
// let repeat = (text, repeatCount) => {
//   let result = '';

//   for(let i = 0; i < repeatCount; i++) {
//     result += text;
//   }

//   console.log(result);
//   return result;
// };

// 다른 방법
const repeat = (text, repeatCount) => {
  return Array(repeatCount).fill(text).reduce(acc => acc + text, '')};

repeat('안녕👋🏻', 3) // '안녕👋🏻안녕👋🏻안녕👋🏻'