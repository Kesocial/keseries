'use client'

import {Skeleton} from "@nextui-org/react";
import { TabsCustom } from "../TabsCustom";
import { ViewerSkeleton } from "../Viewer/ViewerSkeleton";

export function EpisodeViewerSkeleton() {
  return (
     <section className="mt-4 w-full">
      <Skeleton className="rounded-lg h-10 w-2/3 mx-auto">
        <h1 className="text-4xl font-bold bg-black w-full text-center">Titulo promedio</h1>
      </Skeleton>
      <Skeleton className="w-1/3 mx-auto rounded-lg mt-1 mb-1 ">
        <p className="text-small text-default-400 bg-black text-center"> Episodio X</p>
      </Skeleton>
      <TabsCustom fullWidth="true" ariaLabel="Animes" items={[{id:1}]} component={ViewerSkeleton}></TabsCustom>
    </section> 
  );
}
