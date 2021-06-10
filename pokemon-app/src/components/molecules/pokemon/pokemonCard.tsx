// import { memo, VFC} from "react";
import axios from "axios";
import useSWR from 'swr'
import React from 'react';
import { Box, Stack, Image, Text ,Wrap,WrapItem, Center, Spinner} from "@chakra-ui/react";
import { useAllPokemon } from '../../../hooks/useAllPokemon'
import { Pokemon } from '../../../types/api/pokemon'

type Props = {
    // pokemon: Pokemon[];
    num: number;
    // height: string;
    // weight: string;
  }

export const PokemonCard: React.FC<Props> = (props) => {
    const { num } = props;
    // const {pokemonObject,isLoading,isError} =useAllPokemon([])
    // const getAllPokemon =  ()=>  axios.get("https://pokeapi.co/api/v2/pokemon/80").then(res => res.data)
    // const { data, error } =  useSWR("https://pokeapi.co/api/v2/pokemon/80", getAllPokemon)
    const getAllPokemon =  ()=>  axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(res => res.data)
    const { data , error} =  useSWR<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${num}`, getAllPokemon)
    const pokemon = [data]
    // console.log(pokemonObject)
    if (data===undefined) return <Center h="100vh">
        <Spinner color="teal.200" />
        </Center>
    return (
        <>
            {pokemon.map((obj:any) => (
            <WrapItem key={obj.id} mx="auto">
              {/* ここに入れる */}

        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
             <Text fontSize="sm" color="gray" textAlign="center">
                {obj.id}
            </Text>
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              m="auto"
              src={obj.sprites.front_default}
            />
          </Stack>
        </Box>
              {/* ここ */}
            </WrapItem>
          ))}
          </>
      );
    };