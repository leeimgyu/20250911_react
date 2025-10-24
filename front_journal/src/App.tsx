import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './contexts'
import RoutesSetup from './routes/RoutesSetup'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <AuthProvider>
          <RoutesSetup />
        </AuthProvider>
      </BrowserRouter>
    </DndProvider>
  )
}
export default App
