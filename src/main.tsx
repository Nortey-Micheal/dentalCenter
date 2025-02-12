import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { createBrowserRouter } from 'react-router'
const About = lazy(() => import('./pages/about.tsx')); 
const Services = lazy(() => import('./pages/services.tsx'));
import Loading from './components/loading.tsx'
const NoPageFound = lazy(() => import('./pages/404page.tsx'))
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
    path: '/service',
    element: <Services />,
    errorElement: <NoPageFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}/>
    </Suspense>
  </StrictMode>,
)
