import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Login from './Pages/Login'
const Authors = lazy(()=>import('./Pages/Authors'))

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/authors'  element={
          <Suspense fallback='Loading...'>
            <Authors/>
          </Suspense>}
         />
      </Routes>
    </BrowserRouter>
  )
 
}

export default App
