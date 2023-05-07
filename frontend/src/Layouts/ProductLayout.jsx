import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductIndex from '../pages/ProductIndex'
import NavBar from '../components/NavBar'
import AnnouncementBar from '../components/AnnouncementBar'
import BackgroundImage from '../components/BackgroundImage'

export default function ProductLayout() {
  return (
    <div className='h-screen pt-28'>
      <Breadcrumbs />
      <BackgroundImage />
      <Outlet />
    </div>
  )
}






