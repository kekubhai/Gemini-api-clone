import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import ContextProvider from './context/context.jsx'
import './index.css'
const App = () => {
  return (
   <>

    <Sidebar/>
    <Main/>
    <ContextProvider/>
   </>
  )
}

export default App
