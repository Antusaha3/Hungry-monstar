 const searchMeals = () => {
   const mealsItem = document.getElementById('search-field').value;
   
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsItem}`
   
   fetch(url)
   .then(res => res.json())
   .then (data => displayMeals(data.meals))
 }

const displayMeals = meals =>{
  const mealsContainer =document.getElementById('meals-container');

   meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.className = 'meal ';
    const mealInfo =`
    <img  class="meal-img" src ="${meal.strMealThumb}">
    <h3> ${meal.strCategory}</h3>
    
    `;
    mealDiv.innerHTML= mealInfo;
    mealsContainer.appendChild(mealDiv);


    
});
}

const mealsDetails= list =>{

  const url =`https://www.themealdb.com/api/json/v1/1/list.php?i=${list}`
  fetch(url)
  .then(res => res.json()) 
  .then(data => displayDetails(data.meals.data));
}
   const displayDetails = meals =>{
    const detailContainer = document.getElementById('detail-container');

     meals.forEach ( detail => {
      const detailDiv = document.createElement('div');
      detailDiv.className = 'detail';
      const mealDetails =`
      <img  class="meal-img" src ="${meal.strMealThumb}">
      <ul>
       <li> '${detail.strIngredient}'</li>
       <li> '${detail.strDescription}'</li>
      </ul>
      `;
     detailDiv.innerHTML = mealDetails;
     detailContainer = appendChild(detailDiv);
  
    })
   }
   

