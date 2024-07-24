import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Layout } from './components/Layout/Layout'
import { Detail } from './pages/Detail/Detail'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/heroe/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default App
