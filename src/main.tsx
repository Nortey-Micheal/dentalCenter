import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { createBrowserRouter } from 'react-router'
import About from './pages/about.tsx'
import Blogs from './pages/blogs.tsx'
import NoPageFound from './pages/404page.tsx'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoPageFound />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <NoPageFound />
  },
  {
    path: '/blogs',
    element: <Blogs />,
    errorElement: <NoPageFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
