import { Providers } from "@/app/providers"
import {SeriesHeader} from "@/components/Series/SeriesHeader"
import {SeriesEpisodes} from "@/components/Series/SeriesEpisodes"
import {SeriesDescription} from "@/components/Series/SeriesDescription"
async function getAnime(name){
  try {
    const url = `${process.env.URL}:${process.env.PORT}/`
    const animes = await fetch(url+"api/animes/info/"+name, { next: { revalidate: 1 } })
    if (!animes.ok) throw new Error('Failed to fetch animes API')
    return animes.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function Animes({params}) {
  const anime = await getAnime(params.name)
  return (
    <Providers>
      <main>
        <SeriesHeader {...anime} />
        <SeriesEpisodes episodes={anime.episodes} portada={anime.portada}/>
        {/* <SeriesDescription tags={anime.tags}/> */}
      </main>
    </Providers>
  )
}

