import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Hero from "../Home/Hero";
import HexPattern from "../Home/HexPattern";
import { useHomeContent } from "../../hooks/useHomeContent";
import Footer from "./Footer/Footer";

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
          <Hero hero={data?.hero} />
        </div>
      </div>

      {/* أي محتوى تاني في الصفحة (منتجات، سكاشن تانية) بيترندر هنا برة الغلاف */}
      <Outlet />

      {/* <Footer footer={data?.footer} /> */}
    </>
  );
}
