import Head from 'next/head'
import Image from 'next/image'
import { Lista } from '@/components/lista'
import data from '../json/estilista/betterEstilista.json'
import { Main } from '@/components/main'



export default function Home() {
  return (
    <>
      <Head>
        <title>Naturia e Clan</title>
        <meta name="description" content="Naturia e clan, crafts e informações de pxg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={data}/>
    </>
  )
}
