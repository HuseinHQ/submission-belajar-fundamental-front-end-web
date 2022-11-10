class ContactMe extends HTMLElement{
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
      display: inline;
      overflow: hidden;
      max-width: 250px;
      color: white;
      margin: 10px;
    }
    p{
      padding: 20px 20px;
    }
    li{
      text-decoration:
    }
    </style>

    <p>Contact:</p>
    <ul>
      <li>email: mhusein463@gmail.com</li>
      <li>telepon: +6289636990498</li>
      <li>Alamat: Jl. Bhaskara 7/33</li>
    </ul>
    `;
  }
}

customElements.define('contact-me', ContactMe);