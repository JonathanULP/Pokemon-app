import React, { FC } from 'react'

import Head from 'next/head'
import { NavBar } from '../ui/';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children,title }) => {

  const message = `${ title }`;
  return (
    <>
        <Head>
            <title>{ message }</title>
            <meta name='author' content='Jonathan Montiel'  />
            <meta name='description' content={`Informacion sobre el pokemon ${ title }`}  />
            <meta name='keywords' content={ `${ title },pokemon,pokedex` }  />

            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
            <meta property="og:image" content={ `${ origin }/img/banner.png` } />

        </Head>

        <NavBar/>

        <main style={{
          padding: '0px 20px'
        }}>
          { children }
        </main>
        
    </>
  )
}
