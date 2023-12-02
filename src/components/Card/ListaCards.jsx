"use client"
import { ScrollShadow } from "@nextui-org/react"
import { CardCustom } from "./CardCustom"

export function ListaCards({elements}){
  
  return (
    <ScrollShadow orientation="vertical" hideScrollBar >
      <section className="flex flex-col items-center ">
        <div className="grid grid-cols-3 gap-1 max-w-[900px]">
          {elements?.map(({title,src,href,label})=> (<CardCustom key={title} title={title} src={src} href={href} label={label}/>))}
        </div>
      </section>
    </ScrollShadow>
  )
}