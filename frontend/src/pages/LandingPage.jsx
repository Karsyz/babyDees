
import Collections from '../components/Collections'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function LandingPage(props) {

  return (
      <div className='flex flex-col justify-center'>
        <Hero />
        <Collections category="Collections" />
        <Testimonial />
        <ContactForm />
        <Footer />
      </div>
  )
}