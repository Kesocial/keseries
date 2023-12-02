"use client"
export function Viewer({server,title,url,code,width=500,height=300}){
  return (
    <iframe
      allow={"fullscreen "+ url} 
      className="w-full  min-[700px]:h-[500px]"
      src={code}
      width={width}
      height={height}
    ></iframe>
  )
}