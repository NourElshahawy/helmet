import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import { useEffect } from "react";
import { useHeaderContent } from "./hooks/useHeaderContent";
import WhereToFindUs from "./pages/WhereToFindUs/WhereToFindUs";
import Warranty from "./pages/Warranty/Warranty";
import ActivateWarrantyForm from "./pages/Warranty/ActivateWarrantyForm";
import SubmitCompensationForm from './pages/Warranty/SubmitCompensationForm';
import CheckWarrantyStatusForm from './pages/Warranty/CheckWarrantyStatusForm';
import { Toaster } from "sonner";


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {path: "/", element:<Home />},
    {path: "products", element:<Products />},
    {path: "contactUs", element:<ContactUs />},
    {path: "warranty", element:<Warranty />},
    {path: "whereToFindUs", element:<WhereToFindUs />},
    {path: "activateWarranty", element:<ActivateWarrantyForm />},
    { path: "compensation", element: <SubmitCompensationForm /> },
    { path: "checkWarrantyStatus", element: <CheckWarrantyStatusForm /> },
    ],
  },
]);

export default function App() {
  const { data: header } = useHeaderContent();

  useEffect(() => {
    if (header?.favicon) {
      const link =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = header.favicon;
      document.head.appendChild(link);
    }
  }, [header]);

  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
