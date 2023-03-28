let pokemonRepository = (function () {
    let repository = [];// objects within arrays: list of pokemons. erased because we are going to push the list from link  
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let search = document.querySelector("search");
    
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
        loadDetails(pokemon).then(function(){
            showModal(pokemon.imageUrl, pokemon.name, 'Height: ' + pokemon.height);
        });
    }

    function showModal(img, title, text) {
        let modalContainer = document.querySelector('#modal-container');
      
        // Clear all existing modal content
        modalContainer.innerHTML = '';
      
        let modal = document.createElement('div');
        modal.classList.add('modal');
      
        // Add the new modal content
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;
      
        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        let myimage = document.createElement('img');
        myimage.classList.add('modal-img'),
        myimage.src = img;
        //attaching what was created 
        modalContainer.appendChild(modal);
        modal.appendChild(closeButtonElement);
        modal.appendChild(myimage);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        
      
        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (e) => {
            // Since this is also triggered when clicking INSIDE the modal
            // We only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
            hideModal();
            }
        });     
    }
      
    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
    }
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });
    // document.querySelector('#modal-container').addEventListener('click', () => {
    //   showModal('Modal title', 'This is the modal content!');
    // });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem, 
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
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
