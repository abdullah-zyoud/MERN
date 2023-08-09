import React, { useState, useEffect } from 'react';
import "./pokimon.css";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        }

        fetchPokemon();
    }, []);

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;
