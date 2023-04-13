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
    const characterData = await getapidata(characterAPI + random);
    console.log(characterData);

    var characterHTML = "<img class='picperson' src='" + characterData.image + "'/>";
    characterHTML += "<h4>Name: " + characterData.name + "</h4>";
    characterHTML += "<h4>First Episode: " + characterData.firstEpisode + "</h4>";
    characterHTML += "<h4>Voiced By: " + characterData.voicedBy + "</h4>";
    characterInfoPanel.innerHTML = characterHTML;
}

async function generateBurgeroftheDay(){
    var random = Math.floor(Math.random() * 10) + 1;
    const burgerData = await getapidata(burgerAPI + random);
    console.log(burgerData);

    var burgerHTML = "<img class='burgpic' src='" + burgerData.image + "'/>";
    burgerHTML += "<h2>" + burgerData.burger_name + "</h2>";
    burgerHTML += "<p>" + burgerData.description + "</p>";
    burgerInfoPanel.innerHTML = burgerHTML;
}

function saveBurger() {
    characterInfoPanel.innerHTML = "";
    burgerInfoPanel.innerHTML = "";
    generatorContainer.style.display = "none";
    saveContainer.style.display = "flex";
}

function clearLocalStorage() {
    alert("This will clear out saved local storage");
}

burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
charBtnEl.addEventListener("click", generateCharInfo);
startBtnEl.addEventListener("click", startGenerator);
saveBtnEl.addEventListener("click", saveBurger);
backBtnEl.addEventListener("click", startRoutine);
clearBtnEl.addEventListener("click", clearLocalStorage);
