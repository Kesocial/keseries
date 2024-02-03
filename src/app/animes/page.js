import { Providers } from "../providers"
import { TabsCustom } from "@/components/TabsCustom"
import { ListaCards } from "@/components/Card/ListaCards"
import { URL_BASE } from "@/const"
async function getAnimes(){
  try {
    const animes = await fetch(URL_BASE+"api/animes", { next: { revalidate: 60 } })
    if (!animes.ok) return {ultimosEpisodios:[],recienAgregados:[]}
    return animes.json()
  } catch (error) {
    return {ultimosEpisodios:[],recienAgregados:[]}
  }
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

