/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// Object.prototype.toString.call([]) -> [object Array] 기억나죠?

// function isArray(data) {
//   return Object.prototype.toString.call([]).slice(8, -1).toLowerCase(); === 'array'
// }

// array function으로 바꿔보고 재사용할 수 있는 함수도 만들어보자!
// const typeOf = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

// const isArray = data => typeOf(data) === 'array';
// const isNull = data => typeOf(data) === 'null';
// const isNumber = data => typeOf(data) === 'number';
// 얘네 utils 폴더 안 type.js에 넣어놨음!!


const people = [
  {
    id: 0,
    name: '쥬닝',
    age: 20,
    job: '개발자',
    imgSrc: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTNfNjkg%2FMDAxNjEzMTc2MjU2NTk1.h4ChBhVqxBJ6Q_YIr33_bDRwTdSBA8xhX3rD2_m2_Fsg.z_xEnsN_RdjbZNGDabR8zhDXYmow9iD_Mo46Eu9nv9sg.JPEG.youyou0923%2FIMG_3151.JPG&type=sc960_832',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 1,
    name: '선우',
    age: 49,
    job: 'dj',
    imgSrc: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMThfMjc3%2FMDAxNjM3MTk2NzgxMzc3.G-PLsXtFfStFx2v0q2XBYAfglhrs0CCg8-9YDRtxVIUg.jnB_PkrAb3RVjfa8E_7wN88OOLg-YyPknjUfHOYs7nQg.JPEG.seoyoung070908%2FIMG_9863.JPG&type=sc960_832',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 2,
    name: '현재',
    age: 32,
    job: '댄서',
    imgSrc: 'https://search.pstatic.net/sunny/?src=http%3A%2F%2Ffile3.instiz.net%2Fdata%2Fcached_img%2Fupload%2F2020%2F09%2F08%2F10%2F77972d4a1eb17f41cbdb8925b99e7790.png&type=sc960_832',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 3,
    name: '창민',
    age: 17,
    job: '백수',
    imgSrc: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FUQpeB.jpg&type=sc960_832',
    imgAlt: '대체 텍스트입니다.',
  },
]


/* 요소 순환 ---------------------------- */

// forEach

people.forEach(user => user.job);

const span = document.querySelectorAll('span')

span.forEach((spanTag) => {
  spanTag.addEventListener('click', function(){
    this.style.color = 'dodgerblue'
  })
})


// const first = document.querySelector('.first');

// first.addEventListener('click',() => {
//   console.log('first를 클릭하셨습니다.');
// })







/* 원형 파괴 ----------------------------- */

// push
// people.push('admin')

// pop
// people.pop()

// unshift

// shift

// reverse
// const arr = [...people] // 원본 훼손하지 않기 위해 복사해야함
// arr.reverse()
// console.log(arr); // 이렇게 하면 귀찮으니 밑에 toReversed라는게 나온거임

// splice
// people.splice(0, 2, '안녕') // 0번부터 2번까지 자르고, '안녕'을 넣어라!
// console.log(people);

// sort // 원본 훼손
// a는 첫 번째 배열, b는 두 번째 배열임. 두 개를 비교해서 솔팅한다?!
// compare과 같이 써야함!
/*function compare(a,b){
  if(a.age > b.age) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a.age == b.age) return 0; // 두 값이 같은 경우 
  if(a.age < b.age) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}*/
// 구조분해 할당으로 밑 코드처럼 사용 가능
function compare({age:a},{age:b}){
  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우 
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

people.sort(compare);
console.log(people); // 나이가 적은 순으로 배열을 만듦


/* 새로운 배열 반환 ------------------------ */

// concat
// slice

// toReversed
// const toReversed = people.toReversed();
// console.log(toReversed); // 복사 한 후 배열 뒤집는 메서드임!


// toSpliced
const toSpliced = people.toSpliced(0, 2, '안녕');
console.log(toSpliced);
console.log(people);


// toSorted
const toSorted = people.toSorted(compare)

// map -> 특정 부분만 빼와서 배열로 만들어야 할 때 사용!
// 이름만 담은 배열
const nameList = people.map(user => user.name)

// 현재 나이에 +2 배열 반환
const age = people.map(user => user.age + 2)

// {name} : 구조분해 할당 한거임.
const nameTag = people.map(({name, age, job, imgSrc, imgAlt}) => {
  let template =/* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li><span class="strong">이름</span> : ${name}</li>
        <li><span class="strong">나이</span> : ${age}</li>
        <li><span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template // map은 값을 반환해야 해서 return문 사용. 그래서 template에 담아서 사용
})

nameTag.forEach(tag => document.querySelector('ul').insertAdjacentHTML('beforeend', tag))

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find 
// 마주치는 하나만 찾아줌!
// 얘는 item이 어떤 것인지에 따라 반환하는 타입이 달라짐. 객체, 배열 등
const 떤 = people.find((item) => item.name === '선우')

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
// 조건에 부합하는 모든 것을 찾아서 배열로 내보내줌!
// 그리고 배열만! 반환!
const filter = people.filter(item => item.age > 20);
console.log(filter)


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// acc : 누적값, cur: 현재값, 마지막: 초기값
const reduce = people.reduce((acc, cur)=>acc + cur.age ,0) 

const template = people.reduce((acc,cur)=>{
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`
},'')

ul.insertAdjacentHTML('beforeend',template)


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '쥬닝 선우 현재 창민'

const stringToArray = str.split(' ');
console.log(stringToArray);



// join : 배열 → 문자
const arrayToString = stringToArray.join('&');
console.log( arrayToString );




// const user = {
//   grades:[1,2,3],
//   sayHi(){
    
//     this.grades.forEach(()=>{
//       this
//     })
//   }
// }


/* 메서드 파헤치기! --------------------------- */

const forEach = (f,i) => {
  for(const a of i) f(a)
}

forEach((item)=>{
  console.log( item );
},[1,2,3])


const map = (f,i) => {
  let result = [];

  for(const a of i){
    result.push( f(a) )
  }
  
  return result;
}


const _filter = (f,i) => {
  let result = [];

  for(const a of i){
    if(f(a)) result.push(a)
  }  
  return result;
}

_filter(n => n > 3,[1,2,3,4,5]) 




const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];


const _reduce = (f,acc,i) => {

  if(!i){
    i = acc;
    acc = i.shift()
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for(const a of i){
    acc = f(acc,a);
  }

  return acc;
}


const add = (a,b) => a + b;

console.log( _reduce( (t,p) => t + p.price,0 ,products) );



console.log( 


  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000,products)),
  )
  
);

