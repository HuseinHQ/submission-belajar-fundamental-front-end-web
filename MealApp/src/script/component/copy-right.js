class Copyright extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
    <style>
      
    :host {
      display: block;
      bottom: 0;
      color: white;
      padding: 100px;
    }
    </style>

    <p>Belajar Dasar Pemrograman Web &#169; 2022, Dicoding Academy</p>
    `;
  }
}

customElements.define('copy-right', Copyright);