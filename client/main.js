class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <button>btn</button>`;

    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    // this.button.addEventListener('click', () => {
    //   this.clickMe();
    // });
    this.button.addEventListener('click', this.clickMe.bind(this));
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);



// bind는 this를 전달해주는 메서드입니다! 참고!
