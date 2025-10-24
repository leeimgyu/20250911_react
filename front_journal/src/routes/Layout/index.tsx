import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <div style={{ minHeight: 'calc(100vh - 140px)', overflow: 'hidden' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
