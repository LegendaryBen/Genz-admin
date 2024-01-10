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
const Edit_story = lazy(()=> import('./Pages/Edit_story'))
const Upload_magazine_story = lazy(()=> import('./Pages/Upload_magazine_story'))
const AdminDashboard = lazy(()=> import('./Pages/AdminDashboard'))
import Nav from './context api/Nav'
import Admin_Home from './Pages/Admin_Home'
const Admin_users = lazy(()=> import('./Pages/Admin_users'))
const Admin_blocked_users = lazy(()=> import('./Pages/Admin_blocked_users'))
const Admin_magazine = lazy(()=> import('./Pages/Admin_magazine'))
const Admin_notification = lazy(()=> import('./Pages/Admin_notification'))
const Admin_authors = lazy(()=> import('./Pages/Admin_authors'))
const Admin_subscription = lazy(()=> import('./Pages/Admin_subscription'))
const Admin_upload_magazine = lazy(()=> import('./Pages/Admin_upload_magazine'))
import Auth from './context api/Auth'
import { Provider } from 'react-redux'
import store from './Redux/app/store'


function App() {
  
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Auth>
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
            <Route path='edit-story/:ids' element={
            <Suspense fallback='loading..'>
              <Edit_story/>
            </Suspense>}
            />
            <Route path='upload-magazine-story' element={
            <Suspense fallback='loading..'>
              <Upload_magazine_story/>
            </Suspense>}
            />
         </Route>

        <Route path='/admin-dashboard' element={
          <Suspense>
            <AdminDashboard/>
          </Suspense>}
         >
          <Route index element={<Admin_Home/>}/>
          <Route path='admin-users' element={
            <Suspense fallback='loading..'>
              <Admin_users/>
            </Suspense>}
          />
          <Route path='admin-blocked-user' element={
            <Suspense fallback='loading..'>
              <Admin_blocked_users/>
            </Suspense>}
          />
          <Route path='all-magazines' element={
            <Suspense fallback='loading..'>
              <Admin_magazine/>
            </Suspense>}
          />
          <Route path='admin-notification' element={
            <Suspense fallback='loading..'>
              <Admin_notification/>
            </Suspense>}
          />
          <Route path='admin-authors' element={
            <Suspense fallback='loading..'>
              <Admin_authors/>
            </Suspense>}
          />
          <Route path='admin-subscription' element={
            <Suspense fallback='loading..'>
              <Admin_subscription/>
            </Suspense>}
          />
          <Route path='admin-upload' element={
            <Suspense fallback='loading..'>
              <Admin_upload_magazine/>
            </Suspense>}
          />



        </Route>
      </Routes>
    </Nav>
    </Auth>
    </Provider>
    </BrowserRouter>
  )
 
}

export default App
