const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');
const h = (t) => (t.style.height = 0);

// 참고로 아래처럼 하나의 매개변수를 받고 그대로 콘솔찍는다면
// depthList.forEach((item) => console.log(item))
// 아래와 같이 적을 수 있음! 자스의 비밀,,
// depthList.forEach(console.log)
// 이 밑엔 왜 적은거임? 물어보삼
// depthList.forEach(h)

/* global gsap */

aList.forEach((a) => {

  const target = a.lastElementChild;
  const tl = gsap.timeline({paused:true}).to(target,{height:100, ease:'power3.inOut'})

  a.addEventListener('mouseenter', () => tl.play())
  a.addEventListener('mouseleave', () => tl.reverse())


  // a.addEventListener('mouseenter', () => {
  //   const target = a.lastElementChild;

  //   // 내가 선택한 depth를 제외한 항목 0이 아닌 모든 depth 높이를 0 만드는게 쉬움
  //   depthList.forEach(h);

  //   target.style.height = '100px';
  // });
});

header.addEventListener('mouseleave', () => depthList.forEach(h));





