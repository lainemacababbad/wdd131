function addIngredient() {
    const ingredientsList = document.getElementById('ingredients-list');
    const newIngredient = document.createElement('li');
    newIngredient.innerHTML = `
        <input type="text" name="ingredients" required placeholder="Enter an ingredient">
        <button type="button" onclick="removeIngredient(this)">Remove</button>
    `;
    ingredientsList.appendChild(newIngredient);
}

function removeIngredient(button) {
    const ingredientItem = button.parentElement;
    ingredientItem.remove();
}