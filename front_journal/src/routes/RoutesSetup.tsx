import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import RequireAuth from './Auth/RequireAuth'
import Signup from '../pages/SignUp'
import Login from '../pages/Login'
import Logout from '../pages/Logout'

import NoMatch from './NoMatch'
import MyJournal from '../pages/myjournal'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LandingPage from './LandingPage'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/myjournal" element={ <RequireAuth><MyJournal /></RequireAuth> } />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<RequireAuth><Logout /></RequireAuth>} />
      </Route>
    </Routes>
  )
}
