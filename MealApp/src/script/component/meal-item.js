class MealItem extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set meal(meal){
    this._meal = meal;
    this.render();
  }

  render(){
    this.setAttribute('id', this._meal.idMeal)
    this.shadowDOM.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      :host {
        display: inline;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        max-width: 250px;
        color: white;
        margin: 10px;
        background-color: #423745;
      }
      
      .meal-thumbnail {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      
      .meal-info {
        padding: 24px;
      }
      
      .meal-info > h2 {
        font-weight: lighter;
        margin-bottom: 10px
      }
      
      .meal-info span p {
        margin-top: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }

      @media screen and (max-width: 800px){
        :host {
          max-width: 250px;
        }
      }

      </style>

      <img class="meal-thumbnail" src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
      <div class="meal-info">
        <h2>${this._meal.strMeal}</h2>
        <p>Area: ${this._meal.strArea}</p>
        <p>Category: ${this._meal.strCategory}</p>
        <span>
          <p>Instruction: ${this._meal.strInstructions}</p>
        </span>
      </div>
    `;
  }
}

customElements.define('meal-item', MealItem);