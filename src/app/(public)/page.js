'use client'
import CarouselComponent from '@/components/Crousal'
import Donate from '@/components/Donate'
import FAQSection from '@/components/Faq'
import FeedbackSection from '@/components/Feedback'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import RegistrationForm from '@/components/Register'
import { showDB } from '@/lib/appwrite'


export default function Home() {
  
  return (
    <>
      <Hero/>
      <RegistrationForm/>
      <Donate/>
      {/* <CarouselComponent/> */}
      <Info/>
      <FAQSection/>
      <FeedbackSection/>
    </>
    
  )
}
