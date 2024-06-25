import data from './data/data.js';
import { 
  shake, 
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast, 
  removeClass,
  clearContents,
  isNumericString,
  copy} from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭 하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기 addEventListener('click')

// 2. input 값 가져오기
//    - input.value

// 3. data함수에서 주접 1개 꺼내기
//    - data(name)
//    - getRandom()

// 4. pick 항목 랜더링하기

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리 (콘솔 출력)

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');



function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];


  if (!name || name.replace(/\s*/g,'') === '') {
    
    showAlert('.alert-error','공백은 허용하지 않습니다.')
    
    // 왜 갑자기 addClass와 setTimeout(안에 removeClass있음)을 안쓰고 gsap을 쓰냐?
    // 셋타임아웃은 시간을 보장 받지 못한다고 했죠?
    // 프라미스를 사용하면 되지만 그 전에 gsap을 이용해보쟈!
    shake('#nameField').restart();

    return;
  }


  // 숫자만 거르기 위해서 NaN이 맞으면 주접 생성기가 돌아가도록!
  // 근데 000 === NaN 하면 안됨..자스 특성상
  // 그래서 isNaN을 사용해야함. 그걸 isNumericString 함수로 만듦
  if(!isNumericString(name)){
    
    showAlert('.alert-error','제대로된 이름을 입력해 주세요.');

    shake('#nameField').restart();

    return;
  }

  clearContents(result);
  insertLast(result, pick);
}



function handleCopy(){
  const text = result.textContent;

  if(nameField.value){

    // ~.then() : ~ 했어? 그럼 then 안에 있는 거 실행해!
    // 근데 then 메서드 앞은 프라미스 구문이어야만 실행 가능
    // 그래서 copy.js 에서 함수를 return 한거임!
    copy(text).then(()=>{
      showAlert('.alert-success','클립보드 복사 완료!');
    })
    

  }
  
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);