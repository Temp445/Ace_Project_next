
import BackToTop from '@/components/BackToTop'
import Clients from '@/components/Clients'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PricingTable from '@/components/PricingTable'
import Testimonial from '@/components/testimonial'
import Why_Choose from '@/components/Why_Choose'
import Advantages from '@/components/Advantages'
import BookADemo from '@/components/BookADemo'

const Home = () => {
  return (
    <div>
    <div className='container mx-auto absolute md:hidden'><Navbar/></div>
    <Hero/>
    <Why_Choose/>
    <BookADemo/>
    <Advantages/>
    <Clients/>
    <Features/>
    <PricingTable/>
    <Testimonial/>
    <Form/>
    <Footer/>
    <BackToTop/>
    </div>
  )
}

export default Home