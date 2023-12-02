"use client"
import { Card, CardHeader, CardFooter,Image,Link, CardBody, Chip } from "@nextui-org/react"
export function CardAnimeSmall({title,src,href,label,active}){
  if(active) return (
    <Card
      className=" h-[150px] w-[200px] bg-slate-800 ">
      <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur-sm">
        <p className="text-tiny text-white/60 uppercase font-bold select-none">{label}</p>
        <h4 className="block truncate text-white font-medium w-full text-start select-none">{title}</h4>
      </CardHeader>
      {/* <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={src}
      /> */}
      <CardBody className="px-3 py-0 text-small text-default-400">
        
      </CardBody>
      <CardFooter className="">
        <Chip color="warning" variant="dot">Estas viendo</Chip>
      </CardFooter>
    </Card> 
  )
  return (
    <Link href={href}>
      <Card
        isHoverable="true"
        isPressable="true"
        className=" h-[150px] w-[200px] ">
        <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur-sm">
          <p className="text-tiny text-white/60 uppercase font-bold select-none w-full text-left">{label}</p>
          <h4 className="block truncate text-white font-medium w-full text-start select-none">{title}</h4>
        </CardHeader>
        {/* <Image
          removeWrapper
          alt={title}
          className="z-0 w-full h-full object-cover"
          src={src}
        /> */}
      </Card> 
    </Link>
    
  )
}