var requestURL = "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=70";

fetch(requestURL).then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})

var requestURL = "https://burgerservice20230409143907.azurewebsites.net/burger/Burgers";

fetch(requestURL).then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})