import { chromium } from 'playwright';
import { ANIMES_PROVIDER_URL } from '@/const';
async function getListaAnimes({animesJSHandle,titleSelector,labelSelector,srcSelector}){
  const elements = await animesJSHandle.$$("a")
  const animesPromise = elements.map(async el=>{
    const title = await (await el.$(titleSelector)).textContent()
    const label = await (await el.$(labelSelector)).textContent()
    const src = ANIMES_PROVIDER_URL + await (await el.$(srcSelector)).getAttribute("src")
    const href = "animes"+await el.getAttribute("href")
    if(title && src && href)
      return {
        label:label?label:"Serie",  
        title,
        href,
        src,
      } 
  })
  let animes = await Promise.allSettled(animesPromise)
  animes = animes.map(({status,value})=>{
    if(status==="fulfilled") return value
  }).filter(Boolean)
  return animes
}
export async function GET() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(ANIMES_PROVIDER_URL);
  const [{value:ultimosEpisodios},{value:recienAgregados}] = await Promise.allSettled(
    [
      (async ()=>{
        const animesJSHandle = await page.$(".ListEpisodios")
        return await getListaAnimes({animesJSHandle,titleSelector:".Title",labelSelector:".Capi",srcSelector:"img"})
      })(),
      (async ()=>{
        const animesJSHandle = await page.$(".ListAnimes")
        const listaAnimes = await getListaAnimes({animesJSHandle,titleSelector:".Title",labelSelector:".Type",srcSelector:"img"})
        return listaAnimes.map(anime=>{
          anime.href = anime.href.replace("/anime","/info")
          return anime 
        })
      })()
    ])
  await browser.close();
  return Response.json({ultimosEpisodios,recienAgregados})
}
