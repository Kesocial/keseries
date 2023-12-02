"use client"
import { Chip } from "@nextui-org/react"
import Image from "next/image"

export function EpisodeViewer({title,alts,frontIMG,state}){
  return (
    <header className="mt-4 w-full">
      <h1>{title}</h1>
      {alts.map(alt=><Chip key={crypto.randomUUID()}>{alt}</Chip>)}
      <Chip>{state}</Chip>
    </header>)
}
