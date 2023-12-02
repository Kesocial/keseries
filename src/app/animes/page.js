import { Providers } from "../providers"
import { TabsCustom } from "@/components/TabsCustom"
import { ListaCards } from "@/components/Card/ListaCards"
async function getAnimes(){
  const animes = await fetch(URL_BASE+"api/animes", { next: { revalidate: 60000 } })
  if (!animes.ok) throw new Error('Failed to fetch animes API')
  return animes.json()
}

export default async function Animes() {
  const {ultimosEpisodios,recienAgregados} = await getAnimes()
  let items = [
    {
      id: "ultimosEpisodios",
      title: "Ultimos Episodios",
      elements:ultimosEpisodios
    },
    {
      id: "recienAgregados",
      title: "Ultimos Animes",
      elements:recienAgregados
    },
  ];
  return (
    <Providers>
      <main>
        <h1 className="text-center text-4xl font-bold">Animes</h1>
        <TabsCustom variant="bordered" ariaLabel="Animes" items={items} component={ListaCards}></TabsCustom>
      </main>
    </Providers>
  )
}

