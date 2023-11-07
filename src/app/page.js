import CarouselComponent from '@/components/Crousal'
import Donate from '@/components/Donate'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import RegistrationForm from '@/components/Register'

export default function Home() {
  return (
    <>
      <Hero/>
      <RegistrationForm/>
      <Info/>
      <Donate/>
      <CarouselComponent/>
    </>
    
  )
}
