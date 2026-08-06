
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ContactUs from './pages/ContactUs/ContactUs';
import WhereToFindUs from './pages/WhereToFindUs/WhereToFindUs';
import Warranty from './pages/Warranty/warranty';
// import { Toaster } from 'sonner';


const router = createBrowserRouter([
  {path: "", element: <Layout />, children: [
    {path: "/", element:<Home />},
    {path: "products", element:<Products />},
    {path: "contactUs", element:<ContactUs />},
    {path: "warranty", element:<Warranty />},
    {path: "whereToFindUs", element:<WhereToFindUs />},
  ]}
]);



export default function App() {
  return (
  <>
    {/* <Toaster position="top-right" richColors closeButton/> */}
    <RouterProvider router={router}></RouterProvider> {/* React Router خاص بـ Provider ده */}
    </>
  )
}
