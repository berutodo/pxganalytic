import Head from 'next/head'
import data from '../json/estilista/betterEstilista.json'
import { Main } from '@/components/main'



export default function Home({data}: any) {
  return (
    <>
      <Head>
        <title>Naturia é Clan</title>
        <meta name="description" content="Guia de Items, craft e profissões não oficial da Pokexgames" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={data}/>
    </>
  )
}

export async function getStaticProps(){
  return{
    props: {data}
  }
}