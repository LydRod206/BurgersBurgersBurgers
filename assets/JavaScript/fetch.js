var requestURL = "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=70";

fetch(requestURL).then(function(response){
    return response.json ();
})
.then(function(data){
    console.log(data)
})