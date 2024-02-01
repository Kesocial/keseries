import { HAnimeflv } from '@/Handlers/animeflv.handler';

export async function GET() {
  const animes = await HAnimeflv.getAnimes()
  return Response.json(animes)
}
