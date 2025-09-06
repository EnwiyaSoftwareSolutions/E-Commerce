"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Styles from './HeadderCarosuel.module.css'
import Image from "../../../../utils/BannerItems.json"

export function HeadderCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        className={Styles.headderMainContainer}
        style={{ width: "99vw", maxWidth: "100%", position: "relative", zIndex: 0, background: "var(--color-background)" }}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {Image.data.map((item: any, index: number) => (
            <CarouselItem key={index}>
              <img
                className={Styles.carouselImage}
                src={item.resource}
                alt={`Slide ${index + 1}`}
              />
              <div className={Styles.carouselItemWrapper}></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className={Styles.arrowContainer}>
          {/* <CarouselPrevious className={Styles.arrowBtn} />
          <CarouselNext className={Styles.arrowBtn} /> */}
        </div>
      </Carousel>
    </div>
  );
}

// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function HeadderCarousel() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-xs"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }



















// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Styles from './HeadderCarosuel.module.css'

// export function HeadderCarousel() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: true })
//   )

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//     //   className="bg-muted/50 px-4 py-8 w-full"
//     className={Styles.headderMainContainer}
//       style={{  zIndex: 0 }}
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent className={Styles.headderCarouselContainer}>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1" >
//               <Card className={Styles.headderCardContainer}>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious  />
//       <CarouselNext  />
//     </Carousel>
//   )
// }

// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function HeadderCarousel() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-xs"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

