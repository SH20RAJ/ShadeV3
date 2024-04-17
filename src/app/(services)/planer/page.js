import { Loader2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export default function Planer() {
  return (
    <>
    <div className="texts flex w-full align-center justify-center h-40 border">
    <Button variant="ghost" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Button</Button>
    
    </div>



    </>
    
  )
}
