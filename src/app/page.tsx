import { HeroSection } from '@/components/HeroSection'
import { Blog } from '@/components/Blog'
export default function Home() {

  return (
    <div className='space-y-40'>
      <HeroSection />
      <Blog />
    </div>
  )
}
