
import { 
  diceAnimation, 
  getNode, 
  getNodes, 
  attr, 
  insertLast, 
  endScroll, 
  clearContents } from "./lib/index.js";

// 1. 주사위 애니메이션

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper')


let count = 0;
let total = 0;

function createItem(diceValue){
  // 생성 함수
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
  `

  return template
}

function renderRecordItem(){
  // 기록 함수
  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = +attr(getNode('#cube'), 'dice')

  // 1. insertLast 함수 사용
  // 2. template 전달
  // 3. diceValue interpolation(보간법) 하기 ex) <td>${diceValue}</td>
  insertLast('.recordList tbody', createItem(diceValue))
  endScroll(recordListWrapper)
}

/*function handleRollingDice() {
  
  let isClicked = false;
  let stopAnimation;

  return () => {
    if(!isClicked){
      console.log('클릭 첫 번째');
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
    }else{
      console.log('클릭 두 번째');
      // clearInterval 사용할 땐 setInterval 에서 나온 값을 넣어야 실행이 됨!
      // 그래서 어떠한 변수에 담아야 하는데, if문 안에서 바로 let이나 const에 담게 되면,
      // 블록 스코프를 가지게 되서 else문에서는 사용하지 못하게 된다.
      // 그래서 if..else 문 밖에 let stopAnimation; 을 만들어 둔거임!
      // 그래서 if문에서도, else 문에서도 같은 변수를 사용할 수 있음.
      clearInterval(stopAnimation);
    }
  
    isClicked = !isClicked
  }
}


// 클로저! handleRollingDice까지만 쓰면 안쪽 함수 자체가 나오는거기 때문에 
// handleRollingDice() 까지 써줘야함.
rollingButton.addEventListener('click', handleRollingDice())*/

// 또는 
const handleRollingDice = (() => {

  
  let isClicked = false;
  let stopAnimation;

  return ()=>{
    if(!isClicked){
      stopAnimation  = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    }
    else{
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  }
})()

// 기록 버튼
function handleRecord(){
  recordListWrapper.hidden = false;

  renderRecordItem();
}

// 초기화 버튼
function handleReset(){
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}


// 이렇게 사용해도 됨. 바로 실행 된거니 호출할 땐 () 안써줘도 됨.
rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
