/*$(".nav-toggler").click (function() {
    $(".navbar").toggleClass('navbar--visible');
})
let date = new Date();
$("#year").text(date.getFullYear());

const apiKey = "ca4b74b8ded24092909fd3d74317be29"
function getRandom() {
    let meal = null;
    if (date.getHours() < 12) {meal = "breakfast"}
    else if (date.getHours() < 17) {meal = "lunch"} 
    else {meal = "dinner"}
    $.get(`https://api.spoonacular.com/recipes/complexSearch?number=6&type=${meal}&apiKey=${apiKey}&addRecipeNutrition=true`, function(data) {
        $.each(data.results, (index, result) => {
            let id = result.id;
            let card= `
                <div class="card">
                    <img src="${result.image}" alt="recipe-image">
                    <h4>${result.title}</h4>
                    <p><span>Cook: ${result.readyInMinutes}min</span> | <span>Servings: ${result.servings}</span></p>
                    <a href="../pages/search-result.html?id=${id}" target="_blank" class="btnn">Recipe</a>
                </div>
                `
            $('.wrapper').append(card);
        })
    })
}

function fetchContent() {
    $.get(`https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`, function(data){
        $('#joke').text(data.text);
    })
    $.get(`https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`, function(data){
        $('#trivia').text(data.text);
    })
}

function searchRecipe(e) {
    e.preventDefault();
    let value = $('input').val();
    
    // Clear the previous search results before making a new search request
    $('.search-wrapper').empty();

    $.get(`https://api.spoonacular.com/recipes/complexSearch?number=4&query=${value}&apiKey=${apiKey}&addRecipeNutrition=true`, function(data){
        $.each(data.results, (index, result) => {
            let id = result.id;
            let card = `
                <div class="search-card">
                    <img src="${result.image}" alt="">
                    <div class="content">
                        <h4>${result.title}</h4>
                        <ul>
                            <li><span>Healthy: </span>${result.veryHealthy}</li>
                            <li><span>Health Score: </span>${result.healthScore}%</li>
                            <li><span>Nutrition Score: </span>${result.nutrition.properties[2].amount.toFixed(2)}%</li>
                            <li><span>Smart Points: </span>${result.weightWatcherSmartPoints}</li>
                            <li><span>Calories: </span>${result.nutrition.nutrients[0].amount} kcal</li>
                        </ul>
                        <a href="../pages/search-result.html?id=${id}" class="recipe-btn btnn" target="_blank">Recipe</a>
                    </div>
                </div>
            `;
            $('.search-wrapper').append(card);
        });
    });
}

$('#search-btn').click(function(e) {
    searchRecipe(e);
    $('input').val("");
})
$('input').keyup(function(e) {
    if (e.key == "Enter") {
        searchRecipe(e);
        $('input').val("");
    } else {
        return false;
    }
})

$('document').ready(getRandom(),fetchContent());*/