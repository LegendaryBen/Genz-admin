import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Login from './Pages/Login'
const Authors = lazy(()=>import('./Pages/Authors'))
const Admin = lazy(()=>import('./Pages/Admin'))
import Home from './Pages/Home'
const Stories = lazy(()=> import('./Pages/Stories'))
const Magazine = lazy(()=> import('./Pages/Magazine'))
const Draft = lazy(()=> import('./Pages/Drafts'))
const Upload_story = lazy(()=> import('./Pages/Upload_Story'))
const Upload_magazine_story = lazy(()=> import('./Pages/Upload_magazine_story'))
import Nav from './context api/Nav'

function App() {
  
  return (
    <BrowserRouter>
    <Nav>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={
            <Suspense fallback='loading..'>
              <Admin/>
            </Suspense>}
        />
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
            <Route path='upload-story' element={
            <Suspense fallback='loading..'>
              <Upload_story/>
            </Suspense>}
            />
            <Route path='upload-magazine-story' element={
            <Suspense fallback='loading..'>
              <Upload_magazine_story/>
            </Suspense>}
            />
         </Route>
      </Routes>
    </Nav>
    </BrowserRouter>
  )
 
}

export default App
