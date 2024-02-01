import {HAnimeflv} from "@/Handlers/animeflv.handler"

export async function GET(req,{ params }) {
  const animeData = await HAnimeflv.getProviders({animeName:params.name})
  return Response.json(animeData)

}
