/* ---------------- */
/* Condition        */
/* ---------------- */

/*const result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');

if (result === 'ECMAScript') {
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? ECMAScript 입니다!');
}*/

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    console.log('그 영화 참 재밌더라!');
  } else {
    // 영화 볼거니?
    let goingToWatchMovie = confirm('영화볼거니?');
    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼거니?');
      if (withWho === 'you') {
        console.log('내가 싫어');
      } else {
        console.log('오 꼭 그 사람이랑 같이 보길 바래!');
      }
    } else {
      console.log('그래 나중에 한 번 꼭 봐!');
    }
  }
}

/*watchingMovie();*/

// 삼항식으로 바꿔보자
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const message = didWatchMovie.includes('yes')
  ? '그 영화 참 재밌더라!'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까? 재밌겠다'
    : '그래..';

// if 문(statement)render(document.body,true)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
