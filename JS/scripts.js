let pokemonRepository = (function() {
    let pokemonList = [
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
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
}) ();

function printArrayDetails(pokemon){
    if (pokemon.height >= .7 && pokemon.height > .5) {
        console.log(pokemon.name + "(height:" + pokemon.height + ")." + "Wow! It's BIG pokemon!");
        document.write(pokemon.name + "(height:" + pokemon.height + ")." + "Wow! It's BIG pokemon!" + "<br>");
      } 
      else if(pokemon.height <= .5 && pokemon.height > .3) {
         console.log(pokemon.name + "(height:" + pokemon.height + ")." + "It's an average pokemon.");   
         // document.write(pokemon.name + "(height:" + pokemon.height + ")." + "It's an average pokemon."+ "<br>");   
      } 
      else {
        console.log(pokemon.name + "(height:" + pokemon.height + ")." + "It's a small pokemon.");
        document.write(pokemon.name + "(height:" + pokemon.height + ")." + "It's a small pokemon.");
      }
};
pokemonRepository.getAll().forEach(printArrayDetails);