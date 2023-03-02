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

pokemonList.forEach(function(pokemon){
    if (pokemon.height >= .7 && pokemon.height > .5) {
        console.log(pokemon.name + "(height:" + pokemon.height + ")." + "Wow! It's BIG pokemon!");
        document.write(pokemon.name + "(height:" + pokemon.height + ")." + "Wow! It's BIG pokemon!" + "<br>");
      } 
      else if (pokemon.height <= .5 && pokemon.height > .3) {
         console.log(pokemon.name + "(height:" + pokemon.height + ")." + "It's an average pokemon.");   
         document.write(pokemon.name + "(height:" + pokemon.height + ")." + "It's an average pokemon."+ "<br>");   
      } 
      else {
        console.log(pokemon.name + "(height:" + pokemon.height + ")." + "It's a small pokemon.");
        document.write(pokemon.name + "(height:" + pokemon.height + ")." + "It's a small pokemon.");
      }

});
