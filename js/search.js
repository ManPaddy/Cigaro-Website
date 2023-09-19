/*const apiKey = "ca4b74b8ded24092909fd3d74317be29";

$(document).ready(function() {
    let recipeId = getUrlParameter('id');
    $.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`, function(response) {
        getMealRecipe(response);
    })
})

function getUrlParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getMealRecipe(data) {
    $('#image').attr('src', data.image);
    $('.title').text(data.title);
    $('#time').text(`${data.readyInMinutes} mins`);
    $('#servings').text(`${data.servings} servings`);
    $('#health').text(`${data.healthScore}%`);
    $('.summary').html(data.summary);
    $.each(data.dishTypes, (index, type) => {
        $('.dish-type').append(`<p>${type}</p>`);
    })
    $.each(data.extendedIngredients, (index, ingredient) => {
        $('#ingredients').append(`<p><span class="subtitle">${ingredient.originalName}</span><span>${ingredient.amount} ${ingredient.unit}</span></p>`);
    })
    $.each(data.analyzedInstructions[0].steps, (index, instruction) => {
        $('#instructions').append(`<li>${instruction.step}</li>`)
    })
}*/