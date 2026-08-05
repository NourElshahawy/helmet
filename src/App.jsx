import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';
// import Home from './pages/Home/Home';
// import { Toaster } from 'sonner';
import Home from './pages/Home/about-us/About';


const router = createBrowserRouter([
  {path: "", element: <Layout />, children: [
    // {path: "", element:<Home />},
  ]}
])



export default function App() {
  return (
    <>
    {/* <Toaster position="top-right" richColors closeButton/> */}
    <RouterProvider router={router}></RouterProvider> {/* React Router خاص بـ Provider ده */}
    <Home />
    </>
  )
}
