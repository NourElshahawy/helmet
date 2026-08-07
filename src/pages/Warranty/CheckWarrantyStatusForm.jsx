import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "../../components/ui/form/FormField";
import FormSection from "../../components/ui/form/FormSection";
import MainBtn from "../../components/ui/MainBtn";
import HeadTitle from "../../components/ui/HeadTitle";
import WarrantyStatusModal from "../../components/ui/WarrantyStatusModal";

const validationSchema = yup.object({
  fullName: yup.string().required("الاسم مطلوب"),
  nationalId: yup.string().required("رقم الهوية مطلوب"),
  serialNumber: yup.string().required("الرقم التسلسلي مطلوب"),
});

export default function CheckWarrantyStatusForm() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    status: null,
    data: null,
  });

  const formik = useFormik({
    initialValues: { fullName: "", nationalId: "", serialNumber: "" },
    validationSchema,
    onSubmit: async (values) => {
      console.log("بيانات التحقق من الضمان:", values);
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // ==== محاكاة رد الـ API — استبدليها لاحقًا بالاستجابة الحقيقية ====
      const mockResponse = {
        status: "active", // "pending" | "active" | "expired" | "rejected" | "cancelled"
        activationDate: "15/07/2026",
        expiryDate: "15/07/2027",
        duration: "سنة واحدة",
      };

      setModalState({
        isOpen: true,
        status: mockResponse.status,
        data: mockResponse,
      });
    },
  });

  return (
    <section className="warranty section">
      <div className="main-container">
        <div className="warranty-form__header">
          <HeadTitle value="التحقق من حالة الضمان" />
        </div>

        <form className="warranty-form" onSubmit={formik.handleSubmit}>
          <FormSection title="بيانات المستخدم">
            <FormField
              fullWidth
              label="الاسم"
              name="fullName"
              placeholder="ادخل اسمك بالكامل"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && formik.errors.fullName}
            />
            <FormField
              fullWidth
              label="رقم الهوية"
              name="nationalId"
              placeholder="ادخل رقم الهوية"
              value={formik.values.nationalId}
              onChange={formik.handleChange}
              error={formik.touched.nationalId && formik.errors.nationalId}
            />
            <FormField
              fullWidth
              label="الرقم التسلسلي"
              name="serialNumber"
              placeholder="ادخل الرقم التسلسلي للجهاز"
              value={formik.values.serialNumber}
              onChange={formik.handleChange}
              error={formik.touched.serialNumber && formik.errors.serialNumber}
            />
          </FormSection>

          <MainBtn
            value={
              formik.isSubmitting ? "جاري التحقق..." : "تحقق من حالة الضمان"
            }
            loading={formik.isSubmitting}
            showIcon={false}
            className="warranty-form__submit"
          />
        </form>
      </div>
      <WarrantyStatusModal
        isOpen={modalState.isOpen}
        onClose={() =>
          setModalState({ isOpen: false, status: null, data: null })
        }
        status={modalState.status}
        data={modalState.data}
      />
    </section>
  );
}
