import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import HexPattern from "../Home/HexPattern";
import { useHomeContent } from "../../hooks/useHomeContent";

export default function Layout() {
  const { data, isLoading, isError } = useHomeContent();

  if (isLoading) return <div className="text-center py-5">...جاري التحميل</div>;
  if (isError)
    return (
      <div className="text-center py-5 text-danger">
        حصل خطأ في تحميل البيانات
      </div>
    );

  return (
    <>
      <div className="hm-top-section">
        <HexPattern />
        <div className="hm-top-section__content">
          <Navbar nav={data?.nav} />
          <Outlet context={{ hero: data?.hero }} />
        </div>
      </div>
      {/* <Footer footer={data?.footer} /> */}
    </>
  );
}
