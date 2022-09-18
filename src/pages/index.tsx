import dynamic from "next/dynamic"
import { Suspense } from "react"

import Loading from "@/components/loading"

const DynamicHome = dynamic(() => import("@/components/home"), {
  suspense: true,
})

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <DynamicHome />
      </Suspense>
    </>
  )
}

export default Home
