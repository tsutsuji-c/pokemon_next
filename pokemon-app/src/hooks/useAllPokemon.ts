// /* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";
import useSWR from 'swr'
import { Pokemon } from '../types/api/pokemon'
// // 
// import { Pokemon } from "../types/api/pokemon";
// type Props = {
//     pokemon: Pokemon[];
//     num: number;
//     // height: string;
//     // weight: string;
//   }
export const useAllPokemon =  async (pokemon:any, num:number=1):Promise<any> => {
    // let {pokemon, num} = Props;
    let isLoading =false
    const getAllPokemon =  ()=>  axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(res => res.data)
    const { data , error} =  useSWR<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${num}`, getAllPokemon)
    const pokemon_list:Array<Pokemon>= [...pokemon ,data]
    console.log(data)
    num++
    if(num<152) {
        return useAllPokemon(pokemon_list,num)
    }else {
        isLoading = true
        return {
            pokemonObject: pokemon_list,
            isLoading: isLoading,
            isError: error
          }
    }
    
    
};