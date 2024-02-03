import { chromium } from 'playwright';
import { ANIMES_PROVIDER_URL } from '@/const';
import { v4 as uuidv4 } from 'uuid';
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
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(ANIMES_PROVIDER_URL);
    // page.on('console', (msg) => {
    //   console.log(msg);
    // });
    const animes = await page.evaluate(function(animes_provider_url){
      const getCard = (el,{titleSelector,labelSelector,srcSelector})=>{
        const title = el.querySelector(titleSelector)?.textContent
        const label = el.querySelector(labelSelector)?.textContent
        const src = el.querySelector(srcSelector)?.src
        const href = "animes"+ el.href
        const dataCard = {
          label:label?label:"Serie",  
          title,
          href,
          src,
        }
        if(title && src && href) return dataCard
      }
      const CARDS1 = [...document.querySelectorAll(".ListEpisodios a")]
      let ultimosEpisodios = CARDS1.map((el)=>getCard(el,{titleSelector:".Title",labelSelector:".Capi",srcSelector:"img"}))
      const CARDS2 = [...document.querySelectorAll(".ListAnimes a")]
      let recienAgregados = CARDS2.map((el)=>getCard(el,{titleSelector:".Title",labelSelector:".Type",srcSelector:"img"}))
      return {ultimosEpisodios,recienAgregados}
    },ANIMES_PROVIDER_URL)
    return animes
  }
  async getProviders({animeName}){
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(ANIMES_PROVIDER_URL+"/ver/"+animeName);
    let animeData = await page.evaluate(()=>{
      const headerVideo = document.querySelector(".CapiTop")
      const subtitle = headerVideo.querySelector(".SubTitle").textContent
      const title = headerVideo.querySelector(".Title").textContent.replace(subtitle,"").trim()
      const query = document.querySelector(".CapNvLs").getAttribute("href").replace("/anime/","")
      return {
        title,
        subtitle,
        providers:videos.SUB,
        query
      }
    })
    animeData.providers = animeData.providers.map((provider)=>{
      const providerElement = {
        ...provider,
        id:uuidv4(),
      }
      return providerElement
    }).filter(Boolean)
    await browser.close();
    return animeData
  }
}
export const HAnimeflv = new CHAnimeflv(ANIMES_PROVIDER_URL,{

})