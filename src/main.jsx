import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import Loading from './components/Loading'
const App = lazy(() => import('./components/App'))

const root = document.getElementById('root')

createRoot(root).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>

)
