import {Link, Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import MemberJoin from './pages/MemberJoin'
import MultiplyCalculator from './pages/MultiplyCalculator'

function App() {
  return (
    <Router>
      <div className="max-w-2xl mx-auto p-4  w-full bg-amber-50">
        <nav className="flex ga-4 mb-6 bg-amber-600 w-full">
          <Link to="/join" className="text-white hover:underline pr-12">회원가입</Link>
          <Link to="/calc" className="text-white hover:underline">곱셈 계산기</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/join" />} />
          <Route path="/join" element={<MemberJoin />} />
          <Route path="/calc" element={<MultiplyCalculator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
