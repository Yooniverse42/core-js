/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first')

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className);

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('haha');
first.classList.remove('hello');
first.classList.toggle('hello'); // 개발자 도구에서 확인 가능. 한 번 치면 들어갔다가 다시 엔터치면 다시 없어짐
console.log(first.classList.contains('hello')); 


console.log(first.classList);
// first.className = '' // 완전 덮어쓰므로 조심


// function  addClass(node, className) {

//   if(isString(node)) node = getNode(node);
//   node.classList.add(className)
// }


// 불편라이팅
function addClass(node, ...className) {
  if(typeof node === 'string') node = document.querySelector(node);

  if(isArray(className)) {
    className.forEach(c => node.classList.add(c))
    return;
  }

  if(typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  
    node.classList.add(className);
}

addClass('.first','a', 'b', 'c')


function removeClass(node, className) {
  if(typeof node === 'string') node = document.querySelector(node);

  if(!className) {
    node.className = ''
    return;
  }

  if(typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  
    node.classList.remove(className)
}

removeClass('.first', 'c')



function toggleClass(node,className){
  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  
  return node.classList.toggle(className);
}


toggleClass('.first','hello')







/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'dodgerblue'

first.style.cssText = `
  color: blue;
  padding: 1rem;
  border: 1px solid red;
`
// 기존 스타일 없어지고 싹 다 갈아 엎어서 조심해서 써야함




/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first)['font-size']);



function getStyle(node, prop) {
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)) {
    throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop]
}

getStyle('.first', 'font-size')  // '32px'



function setStyle(node, prop, value) {
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)) {
    throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.')
  }

  if(!value) throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.style[prop] = value;
}

setStyle('.first', 'color', 'red');



const css = (node, prop, value) => !value ? getStyle(node, prop) : setStyle(node, prop, value);

