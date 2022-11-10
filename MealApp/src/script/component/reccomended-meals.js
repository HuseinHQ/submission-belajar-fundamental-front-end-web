import './meal-item.js';

class ReccomendedMeals extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set meals(meals){
    this._meals = meals;
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
    <style>
      :host{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      meal-item:hover{
        border-radius: 10px;
        box-shadow: 0 0 0 2px;
        cursor: pointer;
      }

    </style>`;
    this._meals.forEach(meal => {
      const mealItemElement = document.createElement('meal-item');
      
      //memanggil fungsi setter meal() pada meal-item.
      mealItemElement.meal = meal;
      this.shadowDOM.appendChild(mealItemElement);
    });
  }

  renderError(message){
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('reccomended-meals', ReccomendedMeals);