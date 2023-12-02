import { Providers } from "@/app/providers";
import { EpisodeViewerSkeleton } from "@/components/EpisodeViewer/EpisodeViewerSkeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Providers>
      <main className="w-10/12">
        <EpisodeViewerSkeleton/>
      </main>
    </Providers>
  )
}