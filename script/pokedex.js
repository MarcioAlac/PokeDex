class PokeDex
{    
    constructor()
    {
        this.SELECTED_POKE = 1
        console.log('ativado')
        this.url = "https://pokeapi.co/api/v2/pokemon/" 
        this.init()
        
    }

    init()
    {
        this.requestForm()
        this.prev()
        this.next()
    }

    next()
    {
        const NEXT = document.querySelector('.btn-next')
        NEXT.addEventListener('click', () => {

            let prev_poke = this.SELECTED_POKE + 1
            let new_url = this.url + prev_poke

            return this.getPoke(new_url)

    })
    }
    

    prev()
    {
        const BTN_PREV = document.querySelector('.btn-prev')
    
        BTN_PREV.addEventListener('click', () => {

                let prev_poke = this.SELECTED_POKE - 1
                let new_url = this.url + prev_poke

                return this.getPoke(new_url)

        })
    }
    
    /**
    *  @description {Return a right pokemon to pokedex} 
    */
    requestForm()
    {
        let form = document.querySelector('.poke_search')
        form.addEventListener('submit', (e) => {

            console.log('ativado f2')
            e.preventDefault()

            let pokemon = document.querySelector('input[name=pokemon]').value
            let new_url = this.url + pokemon
            this.getPoke(new_url)
            document.querySelector('.pokemon_input').value = ''
        })
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
            this.SELECTED_POKE = data.id
            let pokemon_name = data.name

            // console.log(pokemon_name)
            let pokemon_gif = 'magic/assets/pokemons/poke_' + pokemon_pos + '.gif'

            html_img.src = pokemon_gif
            html_p_poke_name.textContent = pokemon_name
            html_p_poke_pos.textContent = pokemon_pos

        })
        // .catch(erro => console.error('Critical erro: ' , erro))
    }
}

const pokemon = new PokeDex
