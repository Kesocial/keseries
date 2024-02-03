import { Providers } from "@/app/providers"
import { CardAnimeSmall } from "@/components/Card/CardAnimeSmall"
import { Carousel } from "@/components/Carousel/Carousel"
import { EpisodeViewer } from "@/components/EpisodeViewer/EpisodeViewer"
import { URL_BASE } from "@/const"
async function getProviders(chapter){
  try {
    const animes = await fetch(`${URL_BASE}api/animes/providers/${chapter}`,{next:{revalidate:60}})
    return animes.json()
  } catch (error) {
    console.log(error)
    return {}
  }
}
async function getAnimeData(name){
  try {
    const animesInfo = await fetch(`${URL_BASE}api/animes/info/${name}`,{next:{revalidate:60}})
    if (!animesInfo.ok) throw new Error('Failed to fetch animes data API')
    return animesInfo.json()
  } catch (error) {
    console.log(error)
    return {episodes:[]}
  }
}

export default async function Animes({params}) {
  const animeProviders = await getProviders(params.name);
  let {episodes} = await getAnimeData(animeProviders.query);
  episodes = episodes.filter(e=>e.href!=="#").map(e=>{
    if(e.episodio===animeProviders.subtitle)e.active = true;
    e.label = e.episodio
    e.href = "/animes"+e.href
    return e;
  }).reverse();
  
  return (
    <Providers>
      <main className="w-10/12 mb-10">
        <EpisodeViewer {...animeProviders}/>
        <Carousel items={episodes} component={CardAnimeSmall}/>
      </main>
    </Providers>
  )
}

