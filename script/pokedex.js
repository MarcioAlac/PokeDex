class PokeDex
{    
    constructor(pokemon)
    {
        console.log('ativado')
        this.pokemon = pokemon;
        this.url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
        this.getPoke(this.url)
    }

    /**
    *  @return {Promise} 
    */
    getPoke(url)
    {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            
            let html_img = document.querySelector('.pokemon_img')
            let html_p_poke_name = document.querySelector('.poke_name')
            let html_p_poke_pos = document.querySelector('.poke_pos')

            let pokemon_pos = data.id
            let pokemon_name = data.name

            // console.log(pokemon_name)
            let pokemon_gif = '/magic/assets/pokemons/poke_' + pokemon_pos + '.gif'

            html_img.src = pokemon_gif
            html_p_poke_name.textContent = pokemon_name
            html_p_poke_pos.textContent = pokemon_pos
            
        })
        .catch(erro => console.error('Critical erro: ' , erro))
    }
}


fetch('/poke-search?')
.then(response => response.json())
.then(data => console.log(data))
let pokedex = new PokeDex(12)

