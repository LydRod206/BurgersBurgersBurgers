var characterAPI = "https://bobsburgers-api.herokuapp.com/characters/";
var burgerAPI =  "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers/";

// button elements
const burgerBtnEl = document.getElementById("burger-btn");
const charBtnEl = document.getElementById("character-btn");

<<<<<<< HEAD
function generateBurgeroftheDay() {
    fetch(burgerAPI).then(function(response){
        return response.json ();
    })
    .then(function(data){
        console.log(data)
        console.log(data[0].description)
        const randomIndex = data[Math.floor(Math.random() * data.length)];
        console.log(randomIndex)
        const burger = data[randomIndex];
        const burgerName = data.burger_name;
        console.log(burgerName)
        const ingredients = burger.ingredients;
        const description = burger.description;
        const image = burger.image;
=======
// character and burger info panels
const characterInfoPanel = document.getElementById("Character");
const burgerInfoPanel = document.getElementById("recipe");
>>>>>>> dev

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

<<<<<<< HEAD
    burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
    charBtnEl.addEventListener("click", generateCharacter);
});
=======
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
>>>>>>> dev
