import NavBar from '../components/NavBar'
import Collections from '../components/Collections'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="App h-full w-full">
      <div className='h-full w-full flex flex-col bg-babyDeesBG'>
        <NavBar />
        <div className="flex-1 flex flex-row justify-center align-center bg-babyDeesBG">
          <img src="/bdLogoComp.png" alt="Baby Dees Logo" className='drop-shadow-bdLogo w-3/5 max-w-screen-sm self-center relative z-0'></img>
          <div className='absolute w-full calcHeight bg-transparent overflow-scroll scrollbar-x-hidden'>
            <div className='marginTopLots'></div>
            <div className='flex flex-col justify-center'>
              <Collections category="Collections" />
              <Testimonial />
              <ContactForm />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}