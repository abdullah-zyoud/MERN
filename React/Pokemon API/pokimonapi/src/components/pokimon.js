import React, { useState, useEffect } from 'react';
import "./pokimon.css";
import axios from 'axios';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response =   axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
                setPokemonList(response.data.results);
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
