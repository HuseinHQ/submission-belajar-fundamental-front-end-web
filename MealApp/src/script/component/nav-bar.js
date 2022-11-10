class NavBar extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render();
  }
  
  static getValue(value){
    const clickedEvent = value;
    console.log(clickedEvent)
  }
  // get value() {
  //     const listItems = document.querySelector('nav-bar').shadowRoot;
  //     const listValue = listItems.querySelectorAll("ul li");
    
  //     listValue.forEach(item => {
  //       item.onclick = function() {
  //         return this.innerText; // this returns clicked li's value 
  //       }
  //     });
    
  // }

  render(){
    this.shadowDOM.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');  
        *, body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Open Sans', sans-serif;
        }
        :host {
          display: block;
          width: 100%;
          background-color: #2d282f;
          color: white;
          text-align: center;
        }
        ul {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        li {
          display: inline-block;
          padding: 20px;
        }
        span {
          display: inline-block;
          text-decoration: none;
          color: white;
        }
        span:hover {
          text-shadow: 0 0 2px white;
          cursor: pointer;
        }
        @media screen and (max-width: 500px){
          li {
            font-size: 12px;
            padding: 5px;
          }
          ul {
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      </style>
      
      <ul>
        <li>Search By:</li>
        <li><span id="name">Name</span></li>
      
      </ul> 
    `;
  }
}

customElements.define('nav-bar', NavBar);