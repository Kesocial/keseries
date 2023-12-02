import { Providers } from "../providers"
import { TabsCustom } from "@/components/TabsCustom"
import { ListaCards } from "@/components/Card/ListaCards"
async function getAnime(name){
  const animes = await fetch(URL_BASE+"api/animes/info/"+name, { next: { revalidate: 30000 } })
  if (!animes.ok) throw new Error('Failed to fetch animes API')
  return animes.json()
}

export default async function Animes({params}) {
  const anime = await getAnime(params.name)
  return (
    <Providers>
      <main>
        <h1 className="text-center text-4xl font-bold">{anime.title}</h1>
        <TabsCustom variant="bordered" ariaLabel="Animes" items={items} component={ListaCards}></TabsCustom>
      </main>
    </Providers>
  )
}

