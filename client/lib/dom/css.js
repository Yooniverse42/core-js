/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */

// 클래스 추가
function addClass(node, ...className) {
  if (typeof node === 'string') node = document.querySelector(node);

  className.forEach((c) => {
    if (isObject(c)) c = Object.values(c);

    if (c.includes(',')) c = c.replace(/\s*/g, '').split(',');

    if (isArray(c)) {
      c.forEach((c) => node.classList.add(c));
    } else if (isString(c)) {
      node.classList.add(c);
    } else {
      throw new TypeError('addClass 함수의 인수는 문자 타입 이어야 합니다.');
    }
  });
}
// addClass('.ground',['a','b','c'])
// addClass('.ground','a','b','c')
// addClass('.ground','a,b,c')
// addClass('.ground',{a:'one',b:'two'})

// 클래스 삭제
function removeClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  node.classList.remove(className);
}


// 클래스 토글
function toggleClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
}

/* -------------------------------------------------------------------------- */
/*                                    style                                   */
/* -------------------------------------------------------------------------- */

// style 확인
function getStyle(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node)[prop];
}


// style 설정
function setStyle(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new ReferenceError(
      'setStyle 함수의 세 번째 인수는 필수 입력값 입니다.'
    );

  node.style[prop] = value;
}


// css로 확인 및 설정
const css = (node, prop, value) =>
  !value ? getStyle(node, prop) : setStyle(node, prop, value);
