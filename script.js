const initializeApp = () => {
    // First render all saved data to list
    const currentItems = getCurrentItems();
    currentItems.forEach(item => {
       appendItem(item);
    });
    // Bind all buttons after append
    bindButtons();

    // Bind shop button first
    $("button").on("click", function() {
        // To avoid double selection, we can save selector to variable and then use it
        const inputEl = $("input");

        let inputValue = inputEl.val();
        if (inputValue === "") {
            alert("Place your to buy Item")
            return false;
        }

        appendItem(inputValue);
        saveData(inputValue)
        // We must rebind buttons on every append because new items would not be bound
        bindButtons();
        inputEl.val("");
    });
}

const getCurrentItems = () => {
    // Get saved items. They are string at this point
    const items = window.localStorage.getItem('items');
    // if items exist parse them from string to normal JS object, otherwise let's return empty array
    return items ? JSON.parse(items) : [];
}

const saveData = (item) => {
    // First get current items
    const currentItems = getCurrentItems();
    // Append new item to array
    currentItems.push(item);
    // Save this new array back. It must be string - this is required by localstorage
    window.localStorage.setItem('items', JSON.stringify(currentItems));
}

const bindButtons = () => {
    // To avoid double selection, we can save selector to variable and then use it
    const todoItem = $("div.todoItem");
    todoItem.off().on("click", "#ok", function(){
        $(this).parent().fadeOut(function(){
            $(this).appendTo(".done");
            $(this).fadeIn();
        })
        $(this).remove("#ok");
    });
    todoItem.off().on("click", "#delete", function(){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        })
    });
}

const appendItem = (value) => {
    // note data attribute here. How it can be used for deletion of item?
    $(".todo").append(`<div class="todoItem" data-name=${value}><span>${value}</span>
    <i id="ok" class="far fa-check-square"></i>
    <i id="delete" class="far fa-trash-alt"></i></div>`);
};


// Here starts our app
initializeApp();



