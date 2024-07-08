// script.js

document.addEventListener('DOMContentLoaded', () => {
    let shoppingList = [];

    const inputField = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const listContainer = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');

    // Predefined items
    const predefinedItems = ['Flour', 'Cooking Oil', 'Beans', 'Millet', 'Milk'];
    predefinedItems.forEach(item => shoppingList.push({ name: item, purchased: false }));

    function addItem() {
        const newItem = inputField.value.trim();
        if (newItem) {
            shoppingList.push({ name: newItem, purchased: false });
            inputField.value = '';
            renderList();
        }
    }

    function renderList() {
        listContainer.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            if (item.purchased) {
                listItem.classList.add('purchased');
            }

            const purchaseButton = document.createElement('button');
            purchaseButton.textContent = item.purchased ? 'Unmark' : 'Mark';
            purchaseButton.classList.add('purchase-button');
            purchaseButton.addEventListener('click', () => {
                shoppingList[index].purchased = !shoppingList[index].purchased;
                renderList();
            });

            listItem.appendChild(purchaseButton);
            listContainer.appendChild(listItem);
        });
    }

    function clearList() {
        shoppingList = [];
        renderList();
    }

    addButton.addEventListener('click', addItem);
    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
    clearButton.addEventListener('click', clearList);

    // Initial render with predefined items
    renderList();
});
