import { chromium } from 'playwright';
import { ANIMES_PROVIDER_URL } from '@/const';
import { v4 as uuidv4 } from 'uuid';
export async function GET(req,{ params }) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(ANIMES_PROVIDER_URL+"/ver/"+params.name);
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
  console.log(animeData.providers)
  animeData.providers = animeData.providers.map((provider)=>{
    const providerElement = {
      ...provider,
      id:uuidv4(),
    }
    return providerElement
  }).filter(Boolean)
  await browser.close();
  return Response.json(animeData)

}
