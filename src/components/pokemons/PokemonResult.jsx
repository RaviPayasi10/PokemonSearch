import { useEffect, useState } from 'react'
import PokemonItem from './PokemonItem'
import PokemonModal from './PokemonModal'

function PokemonResult() {
    const [pokemons, setPokemons] = useState([])
    const [next, setNext] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)

    // const next = 'https://pokeapi.co/api/v2'

    const fetchPokemons = async () => {
        const response = await fetch(`${next}`)
        const data = await response.json();
        // console.log(data)
        // console.log(data.results)

        setNext(data.next)

        function pokemonObject(result){
            result.forEach( async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setPokemons(currentList => [...currentList,data])
            })
        }
        pokemonObject(data.results)
        console.log(pokemons)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])


    return (
        <>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 
            lg:grid-cols-3 md:grid-cols-2'>
            {pokemons.map((pokemon,index) => (
                <PokemonItem 
                key={index} 
                id={pokemon.id} 
                name={pokemon.name} 
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name} />
            ))}
        </div>
        <div>
            <button 
            className='text-base-content text-xl text-opacity-40'
            onClick={fetchPokemons}>Load More</button>
        </div>
        </>
    )


}

export default PokemonResult