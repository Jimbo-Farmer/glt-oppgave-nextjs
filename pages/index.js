import Head from 'next/head';
import Header from '../components/Header';
import axios from 'axios';
import searchEnheter from '../functions/searchDropdown';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

const url = 'https://data.brreg.no/enhetsregisteret/api/enheter?page=0&size=1000';

export default function Home(props) {
  const [results, setResults] = useState([]);
  function handleEvent(e){
    setResults(searchEnheter(props.enheter, e.target.value.trim()));
  }
  return (
    <>
      <Head>
        <title>GLT Oppgave React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header text={'GLT Oppgave James Farmer-Ohlsen'} />
      <p>Søk etter enheter i Brønnøysundregistret ved å taste inn organisjonsnavn eller nummer</p>
      <input onKeyUp={handleEvent} type='text'></input>
      <Dropdown list={results} />
    </>
  )
}

export async function getStaticProps(){
  let enheter = [];
  try {
    const response = await axios.get(url);
    enheter = await response.data._embedded.enheter;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      enheter: enheter,
    },
  };
}
