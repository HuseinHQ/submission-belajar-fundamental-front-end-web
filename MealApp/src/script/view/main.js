import 'regenerator-runtime';
import '../component/nav-bar.js';
import '../component/meal-list.js';
import '../component/reccomended-meals.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const navBar = () => {
  const listItems = document.querySelector('nav-bar').shadowRoot;
  const listValue = listItems.querySelectorAll("span");
  
  listValue.forEach(item => {
    item.onclick = () => {
      console.log(item.innerText);
    } 
  });
}


const search = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.meals = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

const main = () => {
  const reccomendedMealListElement = document.querySelector('reccomended-meals');
  
  const onLoad = async() => {
    try {
      const result = await DataSource.getMeal();
      render(result);
    } catch (message) {
      fallback(message);
    }
  };
  
  const render = results => {
    reccomendedMealListElement.meals = results;
  };
  
  const fallback = message => {
    reccomendedMealListElement.renderError(message);
  };
    
  onLoad();
}

export {navBar, search, main}