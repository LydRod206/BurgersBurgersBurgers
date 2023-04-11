const characterAPI = "https://bobsburgers-api.herokuapp.com/characters/limit=9&skip=70";
const burgerAPI =  "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers";

const titleEl = document.getElementById("title");
const burgerSignEl = document.getElementById("burger-sign");
const burgerEl = document.getElementById("burger");
const burgerBtnEl = document.getElementById("BurgerBTN");
const burgerNameEl = document.getElementById("Burger-Name");
const ingredientsEl = document.getElementById("Ingredients");
const descriptionEl = document.getElementById("Description");
const imageEl = document.getElementById("Image");
const charInfoEl = document.getElementById("char-info");
const charBtnEl = document.getElementById("char-btn");
const nameEl = document.getElementById("Name");
const ageEl = document.getElementById("age")
const firstEpEl = document.getElementById("FirstEP");
const voiceEl = document.getElementById("VoiceA");

//FUNCTIONS

function generateBurgeroftheDay(){
    fetch(burgerAPI).then(function(response){
        return response.json ();
    })
    .then(function(data){
        console.log(data)
        const randomIndex = Math.floor(Math.random() * data.length);
        const burger = data[randomIndex];
        const burgerName = burger.burgerName;
        const ingredients = burger.ingredients;
        const description = burger.description;
        const image = burger.image;

        burgerEl.textContent = burgerName;
        burgerNameEl.textContent = burgerName;
        ingredientsEl.textContent = ingredients;
        descriptionEl.textContent = description;
        imageEl.setAttribute("src", image);

    }); 

    }


function generateCharInfo(){
    fetch(characterAPI).then(function(response){
        return response.json ();
    })
    .then(function(data){
        console.log(data)

    const randomIndex = Math.floor(Math.random() * data.length);
        const character = data[randomIndex];
        const Name = character.Name;
        const age = character.age;
        const FirstEP = character.FirstEP;
        const VoiceA = character.VoiceA;

        nameEl.textContent = Name;
        ageEl.textContent = age;
        firstEpEl.textContent = FirstEP;
        voiceEl.textContent = VoiceA; 
    });    
}

burgerBtnEl.addEventListener("click", generateBurgeroftheDay);
charBtnEl.addEventListener("click", generateCharInfo);