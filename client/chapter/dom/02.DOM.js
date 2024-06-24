/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children // 유사 배열 반환 // 그래서 반복 돌리기 가능
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest



// 1. id가 visual-section인 section 태그 요소
document.querySelector('#visual-section');

// 2. class가 list인 ul 태그 요소
document.querySelector('.list');

// 3. list 요소 안에 about li 태그 요소
document.querySelector('.list').children[1]; // 지윤풀이
document.querySelector('.list > li:nth-child(2)'); // 범쌤풀이 css에서 하듯이 하면 됨


const section = document.querySelector('#visual-section');
const list = section.querySelector('.list');
const about = list.querySelector('li:nth-child(2)'); // 범쌤풀이

// 3-1. list 요소 안에 about 텍스트를 가진 li 태그 요소
// 위에 const about 사용
const aboutLi = [...list.children].find(li => li.textContent === 'about');
// textContent 대신에 innerHTML도 사용 가능하지만 보안에 취약함

// 4. name 속성이 seach-box인 form 태그 요소
document.querySelector('form[name="search-box"]'); // 범쌤풀이 css에서 하듯이 하면 됨
const form = document.querySelector('form[name="search-box"]');

//5. form 요소 안에 있는 모든 자식 요소
document.querySelector('form[name="search-box"]').children 
const children = form.children // 이거랑
const children2 = form.querySelectorAll('*') // 이거 다르게 나오는데 다시 확인

//6. form 요소 안에 있는 input 태그 요소
document.querySelector('form[name="search-box"]').lastElementChild;
const input = form.lastElementChild;
const input2 = children[children.length - 1]; // 마지막 찾기


// 재사용할 수 있도록 함수로 만들어보자
// function getNode(node) {
//   return document.querySelector(node);
// }

// getNode('.list'); // ul

// 제이쿼리에선 getNode 대신에 $ 쓰면 됨 ㅋㅋ $('.list') 하면 되겠죵?
// function $(node) {
//   return document.querySelector(node);
// }
// $('.list'); 


// 부모와 자식을 매개변수로 받아보자
// 부모(context 매개변수)를 인수로 못받을 때도 있으니, default parameter를 주자.
function getNode(node,context = document){
  
  // 조건! context가 스트링이라면?
  // if(typeof context === 'string') 이랑 if(isString(context)) 같음
  // if(isString(context)) {
  //   context = document.querySelector(context);
  // }

  // 조건 추가! context가 document가 아니라면 querySelector를 한 번더 돌아줘.
  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}


getNode('.list', '#visual-section'); // ul





function getNodes(node, context = document) {
  
  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

getNodes('.list > li'); // [li, li]

// -> dom 폴더 -> getNode.js 파일에 넣음 -> "eslint 파일에 getNode: true 해줌"









/* 문서 대상 확인 */
// - matches
// - contains