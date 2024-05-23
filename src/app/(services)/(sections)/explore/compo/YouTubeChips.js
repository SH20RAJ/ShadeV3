import { Button } from "@/components/ui/button"


export default function YouTubeChips() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4">
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              All
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Trending
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Music
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Gaming
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              News
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Movies
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Live
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Sports
            </Button>
            <Button className="whitespace-nowrap bg-grey-200" size="sm" variant="ghost">
              Learning
            </Button>
          </div>
  )
}
