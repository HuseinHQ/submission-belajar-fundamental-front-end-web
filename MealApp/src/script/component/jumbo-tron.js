class JumboTron extends HTMLElement{
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
        *, body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color: #2d282f;
          color: white;
          text-align: center;
        }
        h1 {
          padding-top: 100px;
        }
        p {
          padding-bottom: 100px;
        }
        hr{
          float: left;
          width: 80%;
          margin: 0 10% 0 10%;
          background-color: white;
        }
        
        @media screen and (max-width: 500px){
          h1{
            font-size: 20px;
            padding-top: 40px;
          }
          P{
            font-size: 10px;
            padding-bottom: 40px;
          }
        }
      </style>
      
      <h1>THE MEAL APP</h1>
      <p>FIND YOUR BEST FOOD IN ALL OVER THE WORLD</p>
      <hr>
    `;
  }
}

customElements.define('jumbo-tron', JumboTron);