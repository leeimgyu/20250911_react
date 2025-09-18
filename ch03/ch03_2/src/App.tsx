import './App.css'
import Color from './pages/Color'
import Tailwindcss from './pages/Tailwindcss'
import TextsTest from './pages/TextsTest'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">with Tailwindcss</h1>
      <TextsTest />
      <Color />
      <Tailwindcss />
    </>
  )
}

export default App