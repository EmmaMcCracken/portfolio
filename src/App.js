import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import './App.css'
import CVPage from './components/CVPage/CVPage'

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='cv' element={<CVPage />} />
    </Routes>
  </div>
)

export default App
