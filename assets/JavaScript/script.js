var characterAPI = "https://bobsburgers-api.herokuapp.com/characters/";
var burgerAPI =  "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers/";

// button elements
const burgerBtnEl = document.getElementById("burger-btn");
const charBtnEl = document.getElementById("character-btn");

// character and burger info panels
const characterInfoPanel = document.getElementById("character-info-panel");
const burgerInfoPanel = document.getElementById("burger-info-panel");

// //FUNCTIONS
async function getapidata(url) {
    const response = await fetch(url);
    var data = await response.json();
    return data;
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

burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
charBtnEl.addEventListener("click", generateCharInfo);