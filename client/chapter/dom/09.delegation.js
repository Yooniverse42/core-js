/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav')

function handleClick(e){

  const target = e.target
  const name = target.dataset.name
  const li = target.closest('li')


  // if(target.tagName !== 'LI') return;
  // 이게 UL은 나오면 안되서 LI만 이벤트가 될 수 있도록!
  if(!li) return;


/* 클래스를 사용한 위임 ---------------- */
  // if(target.matches('.about')) {
  //   console.log('about!!');
  // }
  // // matches(css) -> css 가지고 있니? 클래스니까 앞에 점 붙여야함

  // // 얘는 왜 점을 안 붙이냐? 얘는 이미 클래스리스트 중에~ 컨테인스! 포함하고 있니? 
  // // 이므로 굳이 점 안붙여도 됨
  // if(target.classList.contains('home')) {
  //   console.log('home!!');
  // }

  // if(target.classList.contains('contact')) {
  //   console.log('contact!!');
  // }


/* 속성을 사용한 위임 ------------------ */
  // 아래 3개 모두 동일하게 나옴!
  // console.log(target.getAttribute('data-name'));
  // console.log(target.dataset.name);a
  // console.log(attr(target, 'data-name'));

  // if(name === 'about') console.log('about!!');
  // if(name === 'home') console.log('home!!');
  // if(name === 'contact') console.log('contact!!');



/* 노드를 사용한 위임 ------------------ */
if(li.textContent.includes('ABOUT')) console.log('about!!');
if(li.textContent.includes('HOME')) console.log('HOME!!');
if(li.textContent.includes('CONTACT')) console.log('CONTACT!!');
// if(target.textContent.includes('CONTACT')) console.log('CONTACT!!');

}



nav.addEventListener('click', handleClick)



