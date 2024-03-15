import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './Components/Layout'
import Error from './Components/Error'
import Products from './Pages/Products'
import Detail from './Pages/Detail'
function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Route>

          <Route path='*' element={<Error />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
