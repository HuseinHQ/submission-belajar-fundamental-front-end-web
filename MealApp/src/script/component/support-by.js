class SupportBy extends HTMLElement{
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
      #dicoding {
        max-width: 200px;
        padding-left: 20px;
      }
      #upn {
        max-width: 200px;
        padding-left: 20px;
      }
      p{
        padding: 20px 20px;
      }
      </style>

      <p>Support By:</p>
      <img id='dicoding' src="https://www.dicoding.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png" alt="dicoding">
      <img id='upn' src="https://www.upnjatim.ac.id/wp-content/uploads/2018/05/logoupnbaru.png" alt="upn jatim">
    `;
  }
}

customElements.define('support-by', SupportBy);