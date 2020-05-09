//This js file contains functions that work on to do items
//It uses local storage functions to load and save the to do item array

//This function loads the to do items array from storage and returns it
function loadToDoItemsFromStorage () {
    //Read the string version of the array from local storage, convert it to a reall array and return it
    
    //This variable will hold the value we get back from local storage
    var storedArray = readFromStorage("ToDoItems");

    //Create a new array variable
    var toDoItems = [];

    //populate the new array by convering the string to an array of todo objects using the JSON.parse function
    toDoItems = JSON.parse(storedArray);
    
    //Return the array
    return toDoItems;

}

//This function saves the to do items array to storage
function saveToDoItemsToStorage (theArray) {
    //Convert the array into a string and save it to local storage
    
    //This variable will hold the stringified array
    var stringifiedArray = JSON.stringify(theArray);
        
    //Write the value to local storage
    writeToStorage("ToDoItems",stringifiedArray);
    
}

//This function clears all to do items from storage
function clearToDoItemsFromStorage(){
    //Call the function to remove the to do items from storage
    clearStorage("ToDoItems");
}

//This function returns a ToDo item based on the title, description and due date passed in
function createToDoItem(newTitle, newDescription, newDate) {

    var todoItem = {
    title:newTitle, 
    description:newDescription, 
    dueDate:newDate};

    return todoItem;
}  

//This function removes a single to do item from the array
function deleteToDoItemFromArray (theArray, itemNumber){
    
    //Get rid of the specified to do item from the array
    //The first parameter is the item to remove, the second parameter says to remove one item
    theArray.splice(itemNumber,1);
}

//This function adds a to do item to the array
function addToDoItemToArray (theArray, theToDoItem) {
    
    //Add an item to the end of the array
    theArray.push(theToDoItem);
    
}


