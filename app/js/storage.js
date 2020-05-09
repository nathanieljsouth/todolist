//This js file contains functions that use local storage

//This function writes a string to local storage
function writeToStorage(name, value){
    localStorage.setItem(name, value);
}

//This function reads a string from local storage
function readFromStorage(name){
    //This variable will hold the item retrieved from storage
    var storedItem;
    storedItem = localStorage.getItem(name);
    return (storedItem);
}

//This function removes a value from local storage
function clearStorage(name){
    localStorage.removeItem(name);
}