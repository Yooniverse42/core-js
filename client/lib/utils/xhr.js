
// 통신 사이트~?
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

/*
xhr은 [readyState] 라는 5단계의 상태를 가짐
0 : uninitialized
1 : loading
2 : loaded
3 : ineractive
4 : complete
*/

const user = {
  name: 'yooni',
  age: 20,
  gender: 'female'
}

function xhr(method,url,body, 성공, 실패){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  xhr.setRequestHeader('Content-Type','application/json');

  xhr.addEventListener('readystatechange',()=>{

    const {readyState,status,response} = xhr;
    
    if(readyState === 4){ 
      if(status >= 200 && status < 400){
        // console.log(response);
        // 이렇게 하면 문자열로 나옴
        // 그래서 Parse로 받아야 함!
        // console.log(JSON.parse(response));
        
        // 콘솔을 찍는게 문제가 아니니까 얘를 data라는 변수에 담아보자.
        const data = JSON.parse(response);

        // 그리고 콜백함수에 담아보자
        성공(data);
      }
      else{
        실패() // ? 맞나?
        console.log('실패!');
      }
    }
  })

  xhr.send(JSON.stringify(body))
}

// 어떤 통신을 할건지, 어디에 통신할건지, 어떤 데이터를 넣을건지
// xhr('POST', ENDPOINT, user)
// xhr('GET', ENDPOINT)



/*
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete   => 성공 / 실패

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};

// 객체 합성

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        성공(data); // ???
      } else {
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면?

xhr({
  성공(data) {
    console.log(data);
  },
  body: user,
  실패() {},
  url: ENDPOINT,
});

const options = {
  method: 'POST',
  url: ENDPOINT,
  body: user,
  성공() {},
  실패() {},
};

'POST', ENDPOINT, user, (data) => console.log(data), (err) => console.log(err);
*/



