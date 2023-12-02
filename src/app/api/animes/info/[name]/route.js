import { chromium } from 'playwright';
import { ANIMES_PROVIDER_URL } from '@/const';
import { v4 as uuidv4 } from 'uuid';
export async function GET(req,{ params }) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(ANIMES_PROVIDER_URL+"/anime/"+params.name);
  let animeData = await page.evaluate(function papu(){
    const ficha = document.querySelector(".Ficha")
    const title = ficha.querySelector(".Title").textContent
    const type  = ficha.querySelector(".Type")
    const titles = [...ficha.querySelectorAll(".TxtAlt")].map(elTitle=>elTitle.textContent)
    const tags = [...document.querySelectorAll(".Nvgnrs a")].map(elEtiqueta=>elEtiqueta.textContent)
    const synopsis = document.querySelector(".Main .Description").textContent.trim()
    const episodes = [...document.querySelectorAll(".ListCaps a")].map(elEpisodio=>{
      const href = elEpisodio.getAttribute("href")
      const title = elEpisodio.querySelector(".Title")
      return {
        episodio:title.nextElementSibling.textContent,
        title:title.textContent,
        href,
      }
    }).filter(Boolean)
    const state = document.querySelector(".AnmStts").textContent
    const portada = document.querySelector(".AnimeCover").querySelector("img").src
    return {
      title,
      titles,
      type,
      portada,
      tags,
      synopsis,
      episodes,
      state,
    }
  })
  console.log(animeData)
  await browser.close();
  return Response.json(animeData)

}
