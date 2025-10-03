import { createFileRoute } from '@tanstack/react-router'

import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex flex-1 w-full flex-col justify-center min-h-dvh pt-24">
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
    </div>
  )
}
