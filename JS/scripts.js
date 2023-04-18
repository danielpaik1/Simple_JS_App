let pokemonRepository = (function () {
    let repository = [];// objects within arrays: list of pokemons. erased because we are going to push the list from link  
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let search = document.querySelector("#search");
    
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
      listpokemon.classList.add('list-group-item');

      button.classList.add("btn");
      button.classList.add('btn-primary');
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '#exampleModal');

      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      })
      button.innerText = pokemon.name;
      // button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }

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
    function loadDetails(item) {
        let url = item.detailsUrl;
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

    function showDetails(pokemon) {
        loadDetails(pokemon)
    }

    function showModal(pokemon) {

      let modalTitle = document.querySelector(".modal-title");
      modalTitle.innerText = pokemon.name;
  
      let pokemonImage = document.querySelector('.pokemon-image');
      pokemonImage.src = pokemon.imageUrl;
  
      let pokemonHeight = document.querySelector('.pokemon-height');
      pokemonHeight.innerText = 'Height : ' + (pokemon.height/10) + ' m';
  
  
    }
  
    // search for a pokemon
    search.addEventListener("input", function () {
      pokemonRepository.filterSearch(search);
    });

    function filterSearch(searchInput) {
      let filterValue = searchInput.value.toLowerCase();
    
      // filter the pokemonList array based on the filterValue
      let filteredPokemon = pokemonList.filter(function (pokemon) {
        return pokemon.name.toLowerCase().indexOf(filterValue) > -1;
      });
    
      // update the displayed list of Pokemon based on the filtered results
      let pokemonListElement = document.querySelector(".pokemon-list");
      pokemonListElement.innerHTML = "";
      filteredPokemon.forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
    }  
    // function hideModal() {
    //   let modalContainer = document.querySelector('#modal-container');
    //   modalContainer.classList.remove('is-visible');
    // }
    // window.addEventListener('keydown', (e) => {
    //     let modalContainer = document.querySelector('#modal-container');
    //     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    //       hideModal();  
    //     }
    //   });
    // // document.querySelector('#modal-container').addEventListener('click', () => {
    //   showModal('Modal title', 'This is the modal content!');
    // });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem, 
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        filerSearch: filterSearch
        };
})();


pokemonRepository.loadList().then(function() { 
//wil pass these two functions below 
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
    });
});




    // 1st function added.
    //its a promise.fetch function
    //1. fetches the url defined on line 3 (promise)
    //result will be "response"   
    //returns the website's json
    //then will run the json on forEach 
    //then displays name and detailsUrl found in json.result
    //item is ex. [picachu's details]
//2. add loadList and other new functions
//3.pass all pokemon so it will return all pokemon
      //4. loadDetails
      //take para called item 
      //detailsUrl is coming from line 39 
      //item is details eventually 
      //5. executes loadDetails and pass pokemon as argument or parameter
      //then whatever from this gets passed into the console.log 
