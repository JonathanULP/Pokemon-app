import {  Grid } from '@nextui-org/react'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[]
}

const Home: FC<Props> = ({pokemons}) => {
  
  return (
  
    <Layout title='Listado de Pokemon'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map(( pokemon ) =>(
            <PokemonCard key={ pokemon.id} pokemon={ pokemon } />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=155');
  
  const pokemons: SmallPokemon[] = data.results.map(( poke, i ) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  return {
    props: {
      pokemons
    }
  }
}

export default Home
