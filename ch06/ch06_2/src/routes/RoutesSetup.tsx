import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import NoMatch from './NoMatch'
import Board from '../pages/Board'

export default function RoutesSetup() {
  return (
    <Routes>
      {/* 중첩 라우터(nested router) 와 index */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/*" element={<NoMatch />} />
      </Route>
      <Route path="/landing" element={<Layout />}>
        <Route path="/landing/main" element={<LandingPage />} />
      </Route>
      <Route path="/board" element={<Layout />}>
        <Route path="/board/list" element={<Board />} />
      </Route>
      <Route path="/login" element={<NoMatch />} />
    </Routes>
  )
}
