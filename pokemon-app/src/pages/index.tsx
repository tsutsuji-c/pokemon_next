/* eslint-disable react-hooks/exhaustive-deps */
import { PokemonCard } from '../components/molecules/pokemon/pokemonCard'
import { Box, Stack, Image, Text ,Wrap,WrapItem, Center, Spinner} from "@chakra-ui/react";

const Top: React.FC= () => {
    const pokemonCard = []
    let isLoading = true
    for (let i = 1; i < 152; i++) {
      pokemonCard.push(<PokemonCard num={i}  />)
      if (i===151) {
        isLoading =false
      }
    }
    if (isLoading) return <Center h="100vh">
        <Spinner color="teal.200" />
        </Center>
    return(
      <Box>
        <Wrap p={{ base: 4, md: 10 }}>

        {pokemonCard}
        </Wrap>

      </Box>
  
    );
};

// export const getStaticProps: GetStaticProps = async () => {
  
//   const pokemon= await useAllPokemon();

//   return {
//     props: {
//      pokemon:pokemon
//     }
//   }
// }

export default Top;