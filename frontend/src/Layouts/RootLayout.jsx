import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'
import AnnouncementBar from '../components/AnnouncementBar'

export default function RootLayout() {
  return (
    <div className="root-layout App bg-babyDeesBG">
      <header>
        <AnnouncementBar 
          isShown={false}
        />
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}