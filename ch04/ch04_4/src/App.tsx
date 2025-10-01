import FetchTest from './pages/FetchTest'
import WindowResizeTest from './pages/WindowResizeTest'
import ClassLifecycle from './pages/ClassLifecycle'
import './App.css';

function App() {
  return (
    <main>
      <h1 className="bg-blue-500 text-white text-5xl text-center p-3">
        생명주기와 관련이 있는 useEffect(비동기), useLayoutEffect(동기) 훅
      </h1>
      <FetchTest />
      <WindowResizeTest />
      <ClassLifecycle />
    </main>
  )
}

export default App
