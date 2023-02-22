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
];

for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].height >= .7 && pokemonList[i].height > .5) {
         console.log(pokemonList[i].name + "(height:" + pokemonList[i].height + ")." + "Wow! It's BIG pokemon!");
         document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ")." + "Wow! It's BIG pokemon!" + "<br>");
       } 
       else if (pokemonList[i].height <= .5 && pokemonList[i].height > .3) {
          console.log(pokemonList[i].name + "(height:" + pokemonList[i].height + ")." + "It's an average pokemon.");   
          document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ")." + "It's an average pokemon."+ "<br>");   
       } 
       else {
         console.log(pokemonList[i].name + "(height:" + pokemonList[i].height + ")." + "It's a small pokemon.");
         document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ")." + "It's a small pokemon.");
       }
}