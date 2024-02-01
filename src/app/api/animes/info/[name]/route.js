import {HAnimeflv} from "@/Handlers/animeflv.handler"
export async function GET(req,{ params }) {
  const {name} = params
  const anime = await HAnimeflv.getAnime({name})
  return Response.json(anime)
}
