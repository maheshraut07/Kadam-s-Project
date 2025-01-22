import Home from './components/Home'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <Home/>
  }
])

function App() {
 
  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default App
