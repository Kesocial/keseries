"use client"
import { Card, CardHeader,Image } from "@nextui-org/react"
import Link from "next/link"
export function CardCustom({title,src,href,label}){
  return (
    <Link href={href} >
      <Card
        isHoverable="true"
        isPressable="true"
        className="col-span-12 sm:col-span-4 h-[300px] w-[200px] ">
        <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur-sm">
          <p className="text-tiny text-white/60 uppercase font-bold">{label}</p>
          <h4 className="block truncate text-white font-medium w-full text-start">{title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={title}
          className="z-0 w-full h-full object-cover"
          src={src}
        />
      </Card> 
    </Link>
    
  )
}