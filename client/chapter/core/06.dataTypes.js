/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;

console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;

console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello';
const single = 'hello';
const backtick = `hello ${double + single}`;

console.log(backtick);

const str = new String('hello');

console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150; // number literal
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof NaN);
console.log(typeof Infinity);

const num = new Number(150);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;
console.log(typeof bigInt);

const b = BigInt(123);
console.log(b);
/* 비교적 최근에 만들어짐. 그래서 new 키워드 안붙여도 됨! */

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = true;
console.log(typeof isActive);
console.log();

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = { name: 'tiger' }; // object literal

const object = new Object({ name: 'yooni' }); // constructor function

console.log(object);

// 8. 고유한 식별자(unique identifier)
// Symbol은 무조건 생성자 함수로 만들어야함!
const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(id === id2); // false 다른 것들은 true로 나옴

console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

console.clear();

// Object

/*
const user = {
  name: 'yooni',
  age: 20,
};
/*

// Array
const newArray = new Array(2);
/*(2) [비어 있음 × 2]
length: 2

console.log(newArray[0]);
// 비어있는게 2개라서 0 인덱스 하면 언디파인드 나옴
*/

const arr = [10, 100, 1000, null, undefined, 'hello', { name: 'yooni' }];
// 이중, 삼중배열 다 가능~

// function

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);

const user = {
  name: 'yooni',
  sum: function (a, b) {
    return a + b;
  },

  // prototype 내장되어 있음
  sayHi: function () {
    // 1 normal function
    return 'hello';
  },

  // prototype 없음 - 가벼움
  sayHi2: () => {
    // 2 arrow function
    return this;
  },

  // prototype 없음 - 가벼움
  sayHi3() {
    // 3 concise(축약) function
    return this;
  },
};

// 객체 안에 함수가 있으면 method라고 부름.

// this
