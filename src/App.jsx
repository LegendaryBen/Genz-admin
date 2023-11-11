import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Login from './Pages/Login'
const Authors = lazy(()=>import('./Pages/Authors'))
import Home from './Pages/Home'
const Stories = lazy(()=> import('./Pages/Stories'))
const Magazine = lazy(()=> import('./Pages/Magazine'))
const Draft = lazy(()=> import('./Pages/Drafts'))

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/authors'  element={
          <Suspense fallback='Loading...'>
            <Authors/>
          </Suspense>}
         >  
            <Route index element={<Home/>}/>
            <Route path='stories' element={
            <Suspense fallback='loading..'>
              <Stories/>
            </Suspense>}
            />
            <Route path='magazines' element={
            <Suspense fallback='loading..'>
              <Magazine/>
            </Suspense>}
            />
            <Route path='drafts' element={
            <Suspense fallback='loading..'>
              <Draft/>
            </Suspense>}
            />
         </Route>
      </Routes>
    </BrowserRouter>
  )
 
}

export default App
