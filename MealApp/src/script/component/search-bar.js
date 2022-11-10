class SearchBar extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  
  connectedCallback(){
    this.render();
  }

  set clickEvent(event){
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }
  
  render(){
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
      max-width: 31.25rem;
      max-height: 2.8rem;
      margin: auto;
      padding: 50px;
      display: flex;
      position: sticky;
      background-color: #232024;
      
    }
    
    .search-container > input {
      width: 100%;
      padding: 0 3.5rem 0 1.5rem;
      border: 0;
      border-radius: 1.625rem;
      font-weight: bold;
      display: flex;
      outline: 0;
    }
    
    .search-container > input:focus::placeholder {
      font-weight: bold;
    }
    
    .search-container >  input::placeholder {
      font-weight: normal;
    }
    
    .search-container > button {
      width: 3.5rem;
      height: 2.8rem;
      cursor: pointer;
      margin-left: -3.5rem;
      color: white;
      border: 0;
      background-color: transparent;
    }
    svg {
      width: 24px;
      height: 24px;
      viewbox: 0 0 24 24;
    }
    path {
      fill: rgb(102, 102, 102);
      d: path("M 9.5 3 A 6.5 6.5 0 0 1 16 9.5 C 16 11.11 15.41 12.59 14.44 13.73 L 14.71 14 H 15.5 L 20.5 19 L 19 20.5 L 14 15.5 V 14.71 L 13.73 14.44 C 12.59 15.41 11.11 16 9.5 16 A 6.5 6.5 0 0 1 3 9.5 A 6.5 6.5 0 0 1 9.5 3 M 9.5 5 C 7 5 5 7 5 9.5 C 5 12 7 14 9.5 14 C 12 14 14 12 14 9.5 C 14 7 12 5 9.5 5 Z");
    }
    
    @media screen and (max-width: 550px){
      .search-container {
        max-width: 15.25rem;
        max-height: 2rem;
        margin: auto;
        padding: 10px;
        display: flex;
        position: sticky;
        background-color: #232024;
      }
    }
    </style>

    <div id="search-container" class="search-container">
    <input placeholder="Search Food" id="searchElement" type="search">
    <button id="searchButtonElement" type="submit"><svg><path></path></svg></button>
    </div>`;
    
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);