import About from "@/components/partials/About";
import Header from "@/components/partials/Header";
import Process from "@/components/partials/Process";
import Habilities from "@/components/partials/habilities";

import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Suspense fallback={null}>
        <Process />
      </Suspense>
      <Habilities />
    </>
  )
}
