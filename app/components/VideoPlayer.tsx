import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  title: string
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <Button
        className="w-full bg-red-600 hover:bg-red-700 text-white"
        onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
      >
        <Youtube className="mr-2 h-4 w-4" /> Watch Video
      </Button>
    </div>
  )
}

