import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function ProductLayout() {
  return (
    <div className='mt-16 h-screen'>
      <Breadcrumbs />

      {/* Background Image */}
      <div className="fixed w-screen flex flex-row justify-center content-center calcHeight bg-babyDeesBG" >
        <img src="/bdLogoComp.png" alt="Baby Dees Logo" className='object-contain drop-shadow-bdLogo w-3/5 max-w-screen-sm z-20'></img>
      </div>

      {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 "></div> */}

      <Outlet />

    </div>
  )
}






