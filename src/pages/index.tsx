import Head from 'next/head'
import Image from 'next/image'
import { Lista } from '@/components/lista'
import data from '../json/estilista/betterEstilista.json'
import { Main } from '@/components/main'
import { Search } from '@/components/search'



export default function Home({data}: any) {
  return (
    <>
      <Head>
        <title>Naturia e Clan</title>
        <meta name="description" content="Naturia e clan, crafts e informações items de pxg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search/>
      <Main data={data}/>
    </>
  )
}

export async function getStaticProps(){
  return{
    props: {data}
  }
}