/* --------- */
/* Object    */
/* --------- */

/* global isObject */ 

console.log(isObject)

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  miHeight: '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-yooni',
  name: 'yooni',
  email: 'yooniverse@gmail.com',
  isSignIn: false,
  permission: 'paid' // paid | free
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn); // getter
console.log(authUser.permission = 'free'); // setter (점 표기법 뒤에 할당 연산자와 함께 사용하면 setter 함수로 사용 가능)


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn'] = true);  // setter 
console.log(authUser['permission']); // getter


// -------------------------------------------------------------------


// 객체 안에 키가 있는지 확인 방법
Object.prototype.nickName = '메롱'; // 조상 훼손
// 1. in 문 (하지만 위험! nickName도 나옴)
console.log('uid' in authUser);

// 2. for in (얘는 나열함. 얘도 nickName나옴)
for(let key in authUser) {
  console.log(key);
}
// nickName 나오지 않게
for(let key in authUser) {
  if({}.hasOwnProperty.call(authUser, key))
    console.log(key);
}
// value값 나오게 할 땐 (대괄호 표기법 사용)
for(let key in authUser) {
  if({}.hasOwnProperty.call(authUser, key))
    console.log[key];
}

// --------------------------------------------------------------------

// 객체의 key 만을 모아서 배열을 반환하는 메서드 = Object.keys()
const keyList = Object.keys(authUser);
console.log(keyList);

// 객체의 value 만을 모아서 배열을 반환하는 메서드 = Object.values()
const valueList = Object.values(authUser);
console.log(valueList);


// 객체를 넣었을 때 배열로 반환되게 하고 싶어요!
// 즉, Object.keys()와 같게 나오도록 함수를 구현해보자!
function getPropertiesList(obj) {
  let result = [];

  for(let key in obj) {
    if({}.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;
}

getPropertiesList(authUser)


console.clear()
// 프로퍼티 제거(remove) or 삭제(delete)
// 제거는 비워두는 것, 삭제는 메모리까지 즉, 자리까지 없애는 것

authUser.name = null; // 값 임의로 비워두기
console.log(authUser);

/*delete authUser.name; // 아예 없어짐
console.log(authUser);*/


// 객체가 맞는지 확인
function removeProperty(obj, key) {
  if(isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'name') // authUser.name = null;

function deleteProperty(obj, key) {
  if(isObject(obj)) {
    delete obj[key]
  }
}

deleteProperty(authUser, 'name') // undefined

// authUser.name 으로 확인 가능!


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone
  }
}
createUser('yooni', 20, '010-1234-5678');



// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 



// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: isLogin
}
// 계속 이렇게 두 번 사용하면 넘 귀찮!
const student2 = {
  name,
  email,
  authorization,
  isLogin
}
// 그래서 이렇게 사용할 수 있음!



// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 // 오브젝트키스는 배열을 반환하고 배열이니까 length가 있겠지? 그래서 이렇게 코드 사용
}

const a = {}
isEmptyObject(a) // true
isEmptyObject(student) // false



/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10_000];

// const [a0, a1, a2, a3] = arr; //[] 안에 있는 애들은 배열이 아닌 변수 일 뿐
// const a0 = arr[0];
// const a1 = arr[1]; ... 이런 식으로 하는거랑 같음
// 그리고 비워두고 싶다면
// const [,, a2] = arr; 이렇게 사용 가능 그럼 첫 번째, 두 번째는 사용하지 않는다는 말이고, 네 번째도 사용하지 않겠따는 말
// 중요한 건 순서(order)를 바꿀 수 없음! 그래서 변수명 변경 가능

const [a0, ...rest] = arr;
// rest parameter를 이용하여 나머지를 배열로 만들어 줄 수 있음
// rest를 브라우저에 찍으면 (3) [100, 1000, 10000] 나옴


Object.entries(authUser)
// [[key, value], [key, value] ...]
// for of를 사용하면 [key, value] 단위로 나옴
for(let keyValue of Object.entries(authUser)) {
  console.log(keyValue);
}
/*
(2) ['uid', 'user-id-yooni']
(2) ['email', 'yooniverse@gmail.com']
(2) ['isSignIn', true]
(2) ['permission', 'free']
*/

// key만 사용하고 싶다면?
for(let keyValue of Object.entries(authUser)) {
  // console.log(keyValue[0]);
}
/*
uid
email
isSignIn
permission
*/

// value만 사용하고 싶다면?
for(let keyValue of Object.entries(authUser)) {
  console.log(keyValue[1]);
}
/*
user-id-yooni
yooniverse@gmail.com
true
free
*/

// 이렇게 계속 for of 문과 오브젝트 엔트리스를 사용하면 빡시자나용 그래서 구조분해할당을 이용하자
for(let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}
/*
uid user-id-yooni
email yooniverse@gmail.com
isSignIn true
permission free
*/

console.clear()
// 쿼리셀렉터 말고 모든 요소 들고 올 때는 쿼리셀렉터올!
// document.querySelectorAll('span')
// 유사 배열 => 그래서 인덱스를 이용하여 접근 가능
// const spanList = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

// 구조분해할당으로 바꾸면?
const [first, second] = document.querySelectorAll('span');


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300
}

const {함정민, 지유진, 이진용, 한상학} = salaries;

console.log(함정민);

// 근데 객체는 순서 상관없죠? 그래서
// const {지유진, 한상학, 함정민, 이진용} = salaries;
// 이런 식으로 가능
// 대신 순서는 상관 없지만 변수이름을 그대로 사용 해야함!
// const {함, 지, 이, 한} = salaries; 이런식으로 사용 못한다는 말!

// const {지유진:지, 한상학:한, 함정민:함, 이진용:이} = salaries;
// 하지만 이렇게 사용하면 변수명 바꿔서 사용 가능
// 그리고 console.log(함정민);으로 못 불러고 console.log(함);으로 가능

// 기본 값 설정!
// 이렇게 설정하면 객체에 없어도 추가 가능
// const {함정민, 지유진, 이진용, 한상학, 장주원 = 500} = salaries;
// console.log(장주원);
// 기본값도 변수명 변경 가능 {..., 장주원:장 = 500} = salaries;


/*function createUserObject(name, age, gender, job) {
  return {
    name,
    age,
    gender,
    job
  }
}

const person = createUserObject('yooni', 20, 'female', '개발자')*/
// 이렇게 하면 순서가 중요해짐..

/*function createUserObject(obj) {

  console.log(obj);

  return {
    name: obj.name,
    age: obj.age,
    gender: obj.gender,
    job: obj.job
  }
}

// createUserObject에 하나의 객체만 전달한거고 그 안에 키와 밸류를 정해서 준거임
const person = createUserObject({
  name: 'yooni',
  age: 20,
  gender: 'female',
  job: '개발자'
})
*/


// 우리는 구조 분해 할당 배웠으니 사용해보자!
function createUserObject(obj) {

  const {name:n, age:a, gender, job = '홈프로텍터'} = obj;

  return {
    name: n,
    age: a,
    gender,
    job
  }
}

const person = createUserObject({
  name: 'yooni',
  age: 20,
  gender: 'female',
  job: '개발자'
})

// 여기서도 rest 파라미터 사용 가능! 그럼 rest에 객체로 모아줌!


// 이런식으로도 사용 가능!
const { 
  userName, 
  age, 
  gender, 
  job, 
  address = '서울시 중랑구', 
  tel
 } = {
  userName:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
}

// const {userName, ...} = createUserObject(person)









