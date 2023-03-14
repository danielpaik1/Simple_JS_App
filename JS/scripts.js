let pokemonRepository = (function () {
    let repository = [];// objects within arrays: list of pokemons. erased because we are going to push the list from link  
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        repository.push(pokemon);
    }
    function getAll() {
        return repository;
    }

    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      });
    }
    // 1st function added.
    //its a promise.fetch function
    //1. fetches the url defined on line 3 (promise)
    //result will be "response"   
    //returns the website's json
    //then will run the json on forEach 
    //then displays name and detailsUrl found in json.result
    //item is ex. [picachu's details]
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);  //this function is from line 5
          });
        }).catch(function (e) { //catches if any error 
          console.error(e);
        })
      }
      //4. loadDetails
      //take para called item 
      //detailsUrl is coming from line 39 
      //item is details eventually 
    function loadDetails(item) {
        let url = item.detailsUrl;
        console.log(item.detailsUrl)
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
      //5. executes loadDetails and pass pokemon as argument or parameter
      //then whatever from this gets passed into the console.log 
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function(){
            console.log(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem, //2. add loadList 
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
        };
})();
//3.pass all pokemon so it will return all pokemon
pokemonRepository.loadList().then(function() { 
//wil pass these two functions below 
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
    });
});
