/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e) {
  // console.log(arguments) 해보면 유사 배열이라는 것을 알 수 있음
  // Symbol(Symbol.iterator)도 가지고 있어서 for~of문 사용 가능
  //

  let total = 0;
  // 방법 1 : for 문
  /*
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }*/

  // 방법 2 : for~of 문
  /*for (let value of arguments) {
    total += value;
  }*/

  // console.log(total);

  // const arr = [...arguments]; 아래와 같음 어떤걸 써도 노상관
  // const arr = Array.from(arguments);
  const arr = Array.prototype.slice.call(arguments);

  /*arr.forEach(function (price) {
    total += price;
  });*/

  // reduce
  /*arr.reduce(function (acc, cur) {
    console.log(cur);
  }, 0); // 초기값 없으면 1000이 acc로 들어가기 때문에 출력안됨*/

  /*const result = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);*/

  // 위랑 같은거임
  /*const result = arr.reduce((acc, cur) => acc + cur, 0);
  return result;*/

  // 빌려쓰기
  /*Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  });*/

  // 부모(?)바꾸기
  arguments.__proto__ = Array.prototype;
  // console.log(arguments);
  return total;
};

const result = calculateTotal(1000, 5000, 2500);
// console.log(result);

// 흐흐 맵이랑 이것저것
const arr = [10, 100, 1000];

// map은 값을 내뱉는 메소드이기 때문에 변수에 담아줘야함!
const mapValue = arr.map(function (item) {
  return item * 2;
});

console.log(mapValue);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    // let success = function() {} 이렇게 적으면 아래와 같음
    success();
  } else {
    fail();
  }
};

cb(
  false,
  function () {
    console.log('성공입니다!');
  },
  function () {
    '실패입니다..';
  }
);

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www.daum.net',
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
    // location.href = url;
  },
  function () {
    console.log('잘못된 url을 입력하셨습니다.');
  }
);
// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

(function sum() {
  console.log('안녕~');
})();

const MASTER = (function () {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

/*const people = [
  {
    nickName:'tiger',
    age:40
  },
  {
    nickName:'beom',
    age:45
  },
  {
    nickName: 'seon',
    age:20
  }
]

const template = people.reduce(function(htmlCode,cur){
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
},'')*/

// document.body.insertAdjacentHTML('beforeend',template)
