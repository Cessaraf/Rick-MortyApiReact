import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListCardsCharacter from '../components/ListCardsCharacter';
import SearchCharacter from '../components/SearchCharacter';
import { findCharacters } from '../store/actions/CharacterActions';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findCharacters());
  }, []);


  return (
    <div>
      <Head>
        <title>RickMorty API NEXTJS+REDUX+AXIOS+FYOU </title>
        <meta name="description" content="RickMorty API NEXTJS+REDUX+AXIOS+FYOU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-search">
        <SearchCharacter></SearchCharacter>
      </div>


      <ListCardsCharacter></ListCardsCharacter>

    </div>
  )
}
