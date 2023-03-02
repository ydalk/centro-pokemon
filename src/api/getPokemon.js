export const getPokemon = async () => {

    const res = await fetch('https://pokeapi.co/api/v2/type/')

    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    
    return res.json()
}