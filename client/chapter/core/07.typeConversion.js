/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

/* 명시적 */
console.log(typeof String(YEAR));

/* 암시적 */
console.log(typeof YEAR + ''); // number = 'number'
console.log(typeof (YEAR + '')); // string

// undefined, null

let days = null;
console.log(days + '');
console.log(typeof (days + ''));

let friends = undefined;
console.log(friends + '');

// boolean

let isClicked = true;

console.log(String(isClicked));
console.log('isClicked', isClicked); // isClicked.log

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));

// null

let money = null;
console.log(Number(money));

// boolean
// true = 1, false = 0
let isMarried = false;
console.log(Number(isMarried));

// string

let num = '100';
console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);

// numeric string

const width = '120.5px';
console.log(+width);
console.log(parseInt(width));
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('0'));
console.log(Boolean(0));
