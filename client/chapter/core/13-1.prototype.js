/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/*
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  setEat(food) {
    this.stomach.push(food);
  }, // 값을 설정해야하기 때문에 값을 받을 수 있는 매개변수가 꼭 필요!
  getEat() {
    return this.stomach
  } // 값을 내 뱉은 메서드이기 때문에 return값 꼭 필요!
}

animal.setEat('고기')  
*/

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) { //setter
    this.stomach.push(food);
  },
  get eat() { // getter
    return this.stomach
  }
}
// set과 get 메서드의 함수명 같음 하지만 사용방법은 다름!
// 함수가 아니고 프로퍼티처럼 동작함! 결론 편하다!
// animal.eat = '고기' 하면 setter
// animal.eat 하면 getter


// 동물의 종류를 만들어보자 (호랑이)
const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal,
}


// 다양한 종류의 호랑이를 만들어보자
const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
}

// 우리가 지금까지 만든건 객체 리터럴 방식으로 만든거고
// new 키워드를 이용해서 객체를 만들 수 있음!
// 생성자 함수 (벌크형으로 만들 수 있음 ㅋㅋ)

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}// 함수에선 메서드가 없기 때문에 get과 set 메서드를 사용할 수 없다!

const a1 = new Animal(); // 새로운 객체 생성

function Tiger(name){
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다.`
  }
}

// Tiger.prototype = Animal 안됨
Tiger.prototype = a1 
// 프로토타입이 함수일 수는 없잖슴? 그래서 객체를 넣어야하는거지
// 그래서 위에 만든 새로운 객체인 a1 을 부여하면 Animal에 대한 값들을 상속 받을 수 있음.

const 금강산호랑이 = new Tiger('금순이');

// 위처럼 새로운 객체를 만들고... 그 객체를 부여해주면 귀찮잖슴?
// 그래서 새 함수 만들 때 함수 안에 Animal.call(this) 적으면 위와 같이 상속 설정 해줄 수 있음

/*function Tiger(name){
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다.`
  }
}*/













