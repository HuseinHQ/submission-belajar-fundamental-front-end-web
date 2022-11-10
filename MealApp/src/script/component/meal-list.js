import './meal-item.js';

class MealList extends HTMLElement{
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
    const mealListElement = document.querySelector('meal-list');
    mealListElement.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      color: white;
      margin-left: 30px;
    }
    </style>`;
    mealListElement.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('meal-list', MealList);