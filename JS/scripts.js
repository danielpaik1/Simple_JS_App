let pokemonRepository = (function () {
    let repository = [
        {
            name: "Bulbasaur", 
            height: .5, 
            types: ['grass', 'poison']
        },
        {
            name: "Charmander", 
            height: .7, 
            types: ['fire', 'earth']
        },
        {
            name: "Pikachu", 
            height: .3, 
            types: ['grass', 'electricity']
        }
    ];// objects within arrays: list of pokemons
    
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
      button.addEventListener('click', function(pokemon) {
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
    };
})();

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});