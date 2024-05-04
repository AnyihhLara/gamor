import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import GamorPage from '../pages/Gamor'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <GamorPage /> },
    ]
  }
])