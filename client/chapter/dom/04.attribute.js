/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

const first = getNode('.first');
// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log(first.hasAttribute('class'));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class')); // first hello
console.log(first.getAttribute('class').split(' ')); // (2) ['first', 'hello']
console.log(first.getAttribute('sayHi'));
console.log(first.getAttribute('data-value'));

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'tiger');

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id'); // html 바뀜

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes); // html 바뀜

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = 'yooni'; // setter
console.log(first.dataset);
console.log(first.dataset.value);

// dataset 대신 getAttribute 사용해도 됨.
console.log(first.getAttribute('data-name'));



// 불편라이팅.. 그만,,
function getAttr(node, prop) {

  if(isString(node)) node = getNode(node);
  // if(typeof node === 'string) node = document.querySelector(node;)
  
  if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  return node.getAttribute(prop)
}

getAttr('.first', 'sayHi'); // 'hola'


function setAttr(node, prop, value) {
  if(isString(node)) node = getNode(node);


  if(!isString(prop)){
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  if(value === '') {
    return node.removeAttribute(prop);
    
  }

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.setAttribute(prop, value)
}

setAttr('.second', 'class', '')


// function attr(node, prop, value) {
//   if(!value) {
//     return getAttr(node, prop)
//   }else {
//     setAttr(node, prop, value)
//   }
// }
// 삼항연산자 사용
const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value)

attr('.first', 'class') // getter
attr('.first', 'class', 'hahaha') // setter




/*


// 미니 과제 위에꺼 확인
// prop에 data가 있어? 그럼 dataset으로 넣어. 라는 조건 추가!!
setAttr('.second', 'data-name', 'tiger')
//   if(prop.startsWith('data')){
    prop = prop.slice(5)
    node.dataset[prop] = value;
    return;
  }

// 타입에러, 레퍼런스 에러 문구를 내가 만들어보자!
function typeError(message){
  return new TypeError(message + '문자 타입 이어야 합니다.');
}


*/











