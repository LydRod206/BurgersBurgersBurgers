var characterAPI = "https://bobsburgers-api.herokuapp.com/characters/limit=9&skip=70";
var burgerAPI =  "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers";

const burgerNameEl = document.getElementById("Burger-Name");
const ingredientsEl = document.getElementById("Ingredients");
const descriptionEl = document.getElementById("Description");
const imageEl = document.querySelector("#container__col-2 .burger-info img");
const nameEl = document.getElementById("Name");
const ageEl = document.getElementById("age")
const firstEpEl = document.getElementById("FirstEP");
const voiceEl = document.getElementById("VoiceA");

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

        burgerNameEl.textContent = burgerName;
        ingredientsEl.textContent = ingredients;
        descriptionEl.textContent = description;
        imageEl.setAttribute("src", image);

    }); 
}


function generateCharacter(){
    fetch(characterAPI).then(function(response){
        return response.json ();
    })
    .then(function(data){
        console.log(data)

        const randomIndex = Math.floor(Math.random() * data.length);
        const character = data[randomIndex];
        const Name = character.name;
        const age = character.age;
        const FirstEP = character.FirstEP;
        const VoiceA = character.VoiceA;

        nameEl.textContent = Name;
        ageEl.textContent = age;
        firstEpEl.textContent = FirstEP;
        voiceEl.textContent = VoiceA; 
    });    
}
document.addEventListener("DOMContentLoaded", () => {
    const burgerBtnEl = document.getElementById("BurgerBTN");
    const charBtnEl = document.getElementById("Generate-btn");

    burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
    charBtnEl.addEventListener("click", generateCharacter);
});
