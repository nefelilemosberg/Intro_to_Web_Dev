const groceries = ["tomato","cucumber","red onion","feta","mango","apple"]

function displayGroceries () {
    const list=documet.getElementById('groceryList')
    groceries.forEach((item,index)) {
        const li = document.createElement ('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            removeItem(index);
        };

    }
}

function removeItem(index) {
    groceries.splice(index,1);
    displayGroceries();
}

document.addEventListener("click", displayGroceries)