import { chromium } from 'playwright';
import { ANIMES_PROVIDER_URL } from '@/const';
class CHAnimeflv {
  constructor(url,config){
    this.url = url
    this.config = config
  }
  async getAnime({name}={}){
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(this.url+"/anime/"+name);
    let animeData = await page.evaluate(function(){
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
    await browser.close();
    return animeData
  }
  async getAnimes(){
    
  }
}
export const HAnimeflv = new CHAnimeflv(ANIMES_PROVIDER_URL,{

})