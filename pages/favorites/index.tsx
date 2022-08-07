import React from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { useState, useEffect } from 'react';
import { localFavorite } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemon } from '../../components/pokemon';

 const Favorites = () => {

  const [favoritesPokemon, setfavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemon( localFavorite.pokemons() );
  }, [])
  
  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritesPokemon.length === 0
        ? ( <NoFavorites /> )
        : ( <FavoritePokemon favoritesPokemon={favoritesPokemon} />)
      }
      
    </Layout>
  )
}

export default Favorites;
