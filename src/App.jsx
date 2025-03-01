import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MemoParentComp from './components/useMemo/MemoParentComp'
import PreviousState from './components/useRef/PreviousState'

function App() {

  return (
    <div>

      <Navbar/>

      {/* <Home/> */}

      {/* <PreviousState/> */}

      <MemoParentComp/>

    </div>
  )
}

export default App
