const loadFood = async(search)=>{
  try{

    url=` https://www.themealdb.com/api/json/v1/1/search.php?s=${search} `
    const res = await fetch(url)
    const data = await res.json()
    displayFood(data.meals)
    
  }
  catch(error){
    console.log(error)
  }
  

}

const displayFood = (foods)=>{

  const container = document.getElementById('food-container')
  container.textContent = ''

  foods.forEach(food => {
    const div = document.createElement('div')
    div.classList.add('col')

    div.innerHTML = `
        <div class="card h-100">
          <img src="${food.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0,120)}</p>
          </div>
        </div>
      </div>
    
    `
    container.appendChild(div)
    
  });

}



const searchFood = (event)=>{

  event.preventDefault()

  const searchField =  document.getElementById('search-field')
  const searchValue = searchField.value
  loadFood(searchValue)
  searchField.value = ''

}


