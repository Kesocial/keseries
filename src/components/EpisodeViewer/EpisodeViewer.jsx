"use client"
import { TabsCustom } from "../TabsCustom"
import { Viewer } from "../Viewer/Viewer"
import Link from "next/link"
export function EpisodeViewer({title,subtitle,providers,query}){
  return (
    <section className="mt-4 w-full">
      <div className="flex items-center">
        <Link className="w-max-w-fit" href={"/animes/info/"+query}>
          <svg width={24} height={24} className="fill-white">
            <path d="M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z" />
          </svg>
        </Link>
        <h1 className="text-4xl font-bold bg-black w-full text-center">{title}</h1>
      </div>
      <p className="text-small text-default-400 bg-black text-center"> {subtitle}</p>
      <TabsCustom fullWidth="true" variant="bordered" ariaLabel="Animes" items={providers} component={Viewer}></TabsCustom>
    </section>)
}
