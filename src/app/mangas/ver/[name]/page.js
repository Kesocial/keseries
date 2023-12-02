import { Providers } from "@/app/providers"
import { EpisodeViewer } from "@/components/EpisodeViewer/EpisodeViewer"
import { TabsCustom } from "@/components/TabsCustom"
import { Viewer } from "@/components/Viewer/Viewer"
async function getProviders(name){
  const animes = await fetch(`${process.env.URL}api/animes/providers/${name}`, { next: { revalidate: 2 } })
  if (!animes.ok) throw new Error('Failed to fetch animes API')
  return animes.json()
}

export default async function Animes({ params }) {
  const animeProviders = await getProviders(params.name)
  console.log(animeProviders)
  return (
    <Providers>
      <main className="w-10/12">
        <EpisodeViewer {...animeProviders}/>
      </main>
    </Providers>
  )
}

