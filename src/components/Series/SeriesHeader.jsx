"use client"
import { Card, CardFooter, Chip,Image } from "@nextui-org/react"

export function SeriesHeader({title,titles,portada,state,synopsis}){
  return (
    <header className="mt-4 w-full flex gap-4 p-5 max-[550px]:flex-col place-items-center">
      
      <Card className="min-h-[300px] min-w-[200px] max-h-[300px] max-w-[200px]">
        
        <CardFooter className="absolute z-20 bottom-0 flex place-content-center backdrop-blur-sm">
          <span className="font-bold">{state}</span>
        </CardFooter>
        <Image
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          className="z-0 w-full h-full object-cover"
          src={portada}
        />
      </Card>
      <div className="flex flex-col w-full">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex content-start gap-1 mt-2 flex-wrap">
          {titles?.map(alt=><Chip classNames={{content:"text-gray-400"}} variant="flat" key={crypto.randomUUID()}>{alt}</Chip>)}
        </div>
        <div className="flex flex-col mt-8 ml-3">
          <span className="text-sm font-bold text-gray-400">Sinopsis</span>
          <description>
            {synopsis}
          </description>
        </div>
      </div>
    </header>)
}
