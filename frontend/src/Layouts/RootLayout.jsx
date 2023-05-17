import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AnnouncementBar from '../components/AnnouncementBar'

export default function RootLayout() {
  return (
    <div className="root-layout App h-screen">
      <header className='h-16'>
        <AnnouncementBar
          isShown={false}
        />
        <NavBar />
      </header>
      <main className='fixed calcHeight w-screen overflow-scroll bg-babyDeesBG scrollbar-x-hidden'>
          <Outlet />
      </main>
    </div>
  )
}