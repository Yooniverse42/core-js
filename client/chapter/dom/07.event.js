/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;



// 3. 메서드 : element.addEventListener(event, handler[, phase])


function handleClick(e){
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);

}


const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)


// function bindEvent(node,type,handler){
  
//   if(isString(node)) node = getNode(node);

//   node.addEventListener(type,handler);

//   return () => node.removeEventListener(type,handler);

// }

// const firstEventRemove = bindEvent('.first','click',handleClick)


// second.addEventListener('click',firstEventRemove)




/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener






const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({offsetX:x, offsetY:y}) {

  // const {offsetX:x, offsetY:y} = e;
  // let x = e.offsetX;
  // let y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = 
  `translate(${x-(w / 2)}px, ${y-(h / 2)}px)`
}

// ground.addEventListener('click', handleClickBall)


// function handleMove({offsetX:x, offsetY:y}) {
//   console.log(x, y);

//   ball.style.transform = `translate(${x}px, ${y}px)`
// }

// ground.addEventListener('mousemove', handleMove)


function handleMove({offsetX:x, offsetY:y}) {
  console.log(x, y);

  let template = /* html */`
    <div class="emotion" style="top:${y}px; left:${x}px;">🥨</div>
  `
  insertLast(ground, template)
}

ground.addEventListener('mousemove', handleMove)


function debounce(callback,limit = 500){

  let timeout;
  return function (e){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
   
      callback.call(this,e)

    },limit)
  }
}



// call(this,a,a,a,a), apply(this,[a,a,a,a])


// function totalPrice(...args){

//   args
//   arguments
// }

// totalPrice(1000,3000,5000)


function throttle(callback,limit = 500){
  let waiting = false;

  return function (...args){
    
    if(!waiting){
      callback.apply(this,args)
      waiting = true;
      setTimeout(() => waiting = false, limit);
    }
  }
}



// throttle(()=>{
//   console.log('hit');
// })()


ground.addEventListener('mousemove',throttle(handleMove))



// ground.addEventListener('mousemove',(e)=>{
//   console.log( e );
// })










// throttle (수도꼭지),  debounce (공 튀김 방지)

