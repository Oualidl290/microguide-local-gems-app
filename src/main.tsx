
import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load the main App component to improve initial load time
const App = lazy(() => import('./App'))

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingSpinner />}>
    <App />
  </Suspense>
);
