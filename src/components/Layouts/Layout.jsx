import { Outlet, useLocation } from "react-router-dom";
import { useHomeContent } from "../../hooks/useHomeContent";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
  const { data, isLoading, isError } = useHomeContent();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isLoading) return <div className="text-center py-5">...جاري التحميل</div>;
  if (isError)
    return (
      <div className="text-center py-5 text-danger">
        حصل خطأ في تحميل البيانات
      </div>
    );

  return (
    <>
      {!isHomePage && <Navbar nav={data?.nav} />}

      <Outlet />

      <Footer footer={data?.footer} />
    </>
  );
}
