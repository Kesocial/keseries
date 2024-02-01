"use client"
import { Button, Card, CardFooter, CardHeader, Chip, Divider, Link } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
import { useState } from "react"
export function SeriesEpisodes({episodes: _episodes,portada}){
  const [episodes,setEpisodes] = useState(_episodes)
  return (
    <>
    <Button className="w-full" onClick={()=>{
        setEpisodes([...episodes.reverse()])
      }}>Reverse</Button>
    <section className="mt-4 w-full flex flex-wrap gap-2 p-5 place-content-center">
      
      {episodes?.map(episode=>(
      <Link className="w-full max-w-[400px] " key={episode.episodio+episode.href}>
        <Card classNames={{base:"w-full !max-w-none min-h-[130px]"}} 
          isHoverable="false"
          className="min-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              width={40}
              height={40}
              radius="sm"
              alt="nextui logo"
              src={portada}
            />
            <div className="flex flex-col">
              <p className="text-md">{episode.title}</p>
              <p className="text-small text-default-500">{episode.episodio}</p>
            </div>
          </CardHeader>
          {episode.href!=="#" && <>
          <Divider/>
          <CardFooter className="flex justify-center">
            <Link
              isExternal
              showAnchorIcon
              href={episode.href}
            >
              Ver capitulo
            </Link>
          </CardFooter>
          </>}
        </Card>
      </Link>
      ))}
    </section>
    </>
    )
}
