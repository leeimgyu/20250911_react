import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useStore} from './store'
import { BrowserRouter } from 'react-router-dom' // 리액트 라우터 돔에서 제공해줌
import RoutesSetup from './routes/RoutesSetup'
import { Toaster } from 'react-hot-toast'

function App() {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <RoutesSetup />
          <Toaster />
          {/* RoutesSetup : 스프링의 controller역활을 함  */}
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  )
}

export default App