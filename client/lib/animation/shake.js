
export function shake(t) {

  // gsap은 객체를 다 담고 있는 Tween 이라는 값을 반환함!
  // 그래서 tween.play() 이런 식으로 tween이 가지고 있는 메서드를 가져다 쓸 수 있음.
  // 나중에 shake().restart() 이런 식으로 호출할거라서 return animation을 한거임
  // 본체?를 참조해야 하니까!
  const animation = gsap.to(t, {
    duration:0.1,
    x:-10,
    repeat:5,
    yoyo:true,
  })

  return animation;
}





