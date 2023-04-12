var characterAPI = "https://bobsburgers-api.herokuapp.com/characters/";
var burgerAPI =  "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers/";

// button elements
const burgerBtnEl = document.getElementById("burger-btn");
const charBtnEl = document.getElementById("character-btn");

// character and burger info panels
const characterInfoPanel = document.getElementById("Character");
const burgerInfoPanel = document.getElementById("recipe");

// //FUNCTIONS
async function getapidata(url) {
    const response = await fetch(url);
    var data = await response.json();
    return data;
}

async function generateBurgeroftheDay(){
    var random = Math.floor(Math.random() * 10) + 1;
    const burgerData = await getapidata(burgerAPI + random);
    console.log(burgerData);

    var burgerHTML = "<img src='" + burgerData.image + "' width='200'/>";
    burgerHTML += "<h5>" + burgerData.burger_name + "</h5>";
    burgerHTML += "<p>" + burgerData.description + "</p>";
    burgerInfoPanel.innerHTML = burgerHTML;
}

async function generateCharInfo(){
    // we want to get a random character from 1 to 506, 506 is the length of characters from the characters api
    var random = Math.floor(Math.random() * 506) + 1;
    const characterData = await getapidata(characterAPI + random);
    console.log(characterData);

    var characterHTML = "<img src='" + characterData.image + "' width='200' height='260'/>";
    characterHTML += "<p>Name: " + characterData.name + "</p>";
    characterHTML += "<p>First Episode: " + characterData.firstEpisode + "</p>";
    characterHTML += "<p>Voiced By: " + characterData.voicedBy + "</p>";
    characterInfoPanel.innerHTML = characterHTML;
}

burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
charBtnEl.addEventListener("click", generateCharInfo);
