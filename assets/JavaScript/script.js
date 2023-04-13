var characterAPI = "https://bobsburgers-api.herokuapp.com/characters/";
var burgerAPI =  "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers/";

// button elements
const burgerBtnEl = document.getElementById("burger-btn");
const charBtnEl = document.getElementById("character-btn");
const startBtnEl = document.getElementById("getstarted-btn");
const saveBtnEl = document.getElementById("save-btn");
const backBtnEl = document.getElementById("goback-btn");
const clearBtnEl = document.getElementById("clear-btn");

// character and burger info panels
const generatorContainer = document.getElementById("generator-container");
const startContainer = document.getElementById("start-container");
const saveContainer = document.getElementById("saveburger-container");

const characterInfoPanel = document.getElementById("character-info-panel");
const burgerInfoPanel = document.getElementById("burger-info-panel");
const saveInfoPanel = document.getElementById("savedbox");

// Couple variables to hold on to the id of the selected character and burger
var characterData;
var burgerData;

// Function that gets fired when the browser is ready and loaded
window.onload = (event) => {
    startRoutine();
};

// //FUNCTIONS
async function getapidata(url) {
    const response = await fetch(url);
    var data = await response.json();
    return data;
}

function startRoutine() {
    generatorContainer.style.display = "none";
    saveContainer.style.display = "none";
    startContainer.style.display = "flex";
}

function startGenerator() {
    startContainer.style.display = "none";
    generatorContainer.style.display = "flex";
}

async function generateCharInfo(){
    // we want to get a random character from 1 to 506, 506 is the length of characters from the characters api
    var random = Math.floor(Math.random() * 506) + 1;
    characterData = await getapidata(characterAPI + random);
    console.log(characterData);

    // lets display the randomly generated character
    var characterHTML = "<img class='picperson' src='" + characterData.image + "'/>";
    characterHTML += "<h4>Name: " + characterData.name + "</h4>";
    characterHTML += "<h4>First Episode: " + characterData.firstEpisode + "</h4>";
    characterHTML += "<h4>Voiced By: " + characterData.voicedBy + "</h4>";
    characterInfoPanel.innerHTML = characterHTML;
}

async function generateBurgeroftheDay(){
    // lets get a random burger from the burger api
    var random = Math.floor(Math.random() * 10) + 1;
    burgerData = await getapidata(burgerAPI + random);
    console.log(burgerData);

    // lets display the randomly generated burger
    var burgerHTML = "<img class='burgpic' src='" + burgerData.image + "'/>";
    burgerHTML += "<h2>" + burgerData.burger_name + "</h2>";
    burgerHTML += "<p>" + burgerData.description + "</p>";
    burgerInfoPanel.innerHTML = burgerHTML;
}

function saveBurger() {
    // lets first save all selected details to local storage
    localStorage.removeItem("savedBurger");
    const savedData = {
        character: characterData,
        burger: burgerData
    }
    localStorage.setItem("savedBurger", JSON.stringify(savedData));

    //populate save panel with saved details
    var saveHTML = "<img class='burgpic' src='" + burgerData.image + "'/>";
    saveHTML += "<h2>" + burgerData.burger_name + "</h2>";
    saveHTML += "<p>" + burgerData.description + "</p>";
    saveInfoPanel.innerHTML = saveHTML;

    // now lets clear the generator panels of the details
    characterInfoPanel.innerHTML = "";
    burgerInfoPanel.innerHTML = "";
    // clear the data objects as well
    characterData = null;
    burgerData = null;

    // hide the generator panel and display save panel
    generatorContainer.style.display = "none";
    saveContainer.style.display = "flex";
}

function clearLocalStorage() {
    saveInfoPanel.innerHTML = "";
    localStorage.clear();
}

burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
charBtnEl.addEventListener("click", generateCharInfo);
startBtnEl.addEventListener("click", startGenerator);
saveBtnEl.addEventListener("click", saveBurger);
backBtnEl.addEventListener("click", startRoutine);
clearBtnEl.addEventListener("click", clearLocalStorage);
 