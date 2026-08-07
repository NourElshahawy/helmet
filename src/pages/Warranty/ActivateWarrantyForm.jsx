import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "../../components/ui/form/FormField";
import FileUploadField from "../../components/ui/form/FileUploadField";
import FormSection from "../../components/ui/form/FormSection";
import MainBtn from "../../components/ui/MainBtn";
import { toast } from "sonner";
import HeadTitle from "../../components/ui/HeadTitle";
import WarrantyVideoButton from "../../components/ui/WarrantyVideoButton";
const validationSchema = yup.object({
  fullName: yup.string().required("الاسم مطلوب"),
  phone: yup.string().required("رقم الجوال مطلوب"),
  nationalId: yup.string().required("رقم الهوية مطلوب"),
  storeName: yup.string().required("اسم المحل مطلوب"),
  serialNumber: yup.string().required("الرقم التسلسلي مطلوب"),
  notes: yup.string(),
  invoiceImage: yup.mixed().required("صورة الفاتورة مطلوبة"),
  transferWithSerialImage: yup.mixed().required("هذه الصورة مطلوبة"),
  transferInternalImage: yup.mixed().required("هذه الصورة مطلوبة"),
});

export default function ActivateWarrantyForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      nationalId: "",
      storeName: "",
      serialNumber: "",
      notes: "",
      invoiceImage: null,
      transferWithSerialImage: null,
      transferInternalImage: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      // ==== محاكاة استدعاء API محلي بدون سيرفر حقيقي ====
      console.log("بيانات الفورم:", values);

      await new Promise((resolve) => setTimeout(resolve, 1200)); // تأخير وهمي زي طلب حقيقي

      toast.success("تم إرسال طلب تفعيل الضمان بنجاح!");
      formik.resetForm();
    },
  });

  return (
    <>
      <section className="warranty section">
        <div className="main-container">
          <div className="warranty-form__header">
            <HeadTitle value="تفعيل ضمان HELMET" />
            <WarrantyVideoButton videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          </div>

          <form className="warranty-form" onSubmit={formik.handleSubmit}>
            <FormSection title=" البيانات الشخصية">
              <FormField
                label="الاسم"
                name="fullName"
                placeholder="ادخل اسمك بالكامل"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && formik.errors.fullName}
              />
              <FormField
                label="رقم الجوال"
                name="phone"
                type="tel"
                placeholder=" +966 *** *** *** "
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && formik.errors.phone}
              />
              <FormField
                label="البريد الإلكتروني"
                name="email"
                placeholder="example@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
              />
              <FormField
                label="رقم الهوية"
                name="nationalId"
                placeholder="ادخل رقم هويتك"
                value={formik.values.nationalId}
                onChange={formik.handleChange}
                error={formik.touched.nationalId && formik.errors.nationalId}
              />
            </FormSection>

            <FormSection title="بيانات مكان الشراء">
              <FormField
                label="اسم المحل"
                name="storeName"
                placeholder="ادخل اسم المحل"
                value={formik.values.storeName}
                onChange={formik.handleChange}
                error={formik.touched.storeName && formik.errors.storeName}
              />

              <FormField
                label="المدينة"
                name="city"
                placeholder="اكتب اسم المدينة بالحروف العربية فقط ، مع إمكانية المسافة بين كلمتين (مثل: مكة المكرمة).  "
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && formik.errors.city}
              />
            </FormSection>

            <FormSection title=" بيانات الجهاز">
              <FormField
                fullWidth={true}
                label="   الرقم التسلسلي للجهاز"
                name="serialNumber"
                placeholder="ادخل الرقم التسلسلي للجهاز"
                value={formik.values.serialNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.serialNumber && formik.errors.serialNumber
                }
              />
            </FormSection>

            <FormSection title="ملاحظات">
              <FormField
                as="textarea"
                fullWidth
                label="ملاحظات"
                name="notes"
                placeholder="أي تفاصيل إضافية"
                value={formik.values.notes}
                onChange={formik.handleChange}
                error={formik.touched.notes && formik.errors.notes}
                rows={4}
              />
            </FormSection>

            <FormSection title="مرفقات الضمان">
              <FileUploadField
                fullWidth={true}
                label="صورة لفاتورة الشراء"
                name="invoiceImage"
                setValue={(name, file) => formik.setFieldValue(name, file)}
                error={
                  formik.touched.invoiceImage && formik.errors.invoiceImage
                }
              />
              <FileUploadField
                fullWidth={true}
                multiple={true}
                label="صورة للجوال من الأمام مع الرقم التسلسلي"
                name="transferWithSerialImage"
                setValue={(name, file) => formik.setFieldValue(name, file)}
                error={
                  formik.touched.transferWithSerialImage &&
                  formik.errors.transferWithSerialImage
                }
              />
              <FileUploadField
                fullWidth={true}
                multiple={true}
                label="صورة للجوال من الخلف مع الرقم التسلسلي"
                name="transferInternalImage"
                setValue={(name, file) => formik.setFieldValue(name, file)}
                error={
                  formik.touched.transferInternalImage &&
                  formik.errors.transferInternalImage
                }
              />
            </FormSection>

            <MainBtn
              value={formik.isSubmitting ? "جاري الإرسال..." : "تفعيل الضمان"}
              loading={formik.isSubmitting}
              showIcon={false}
              className="warranty-form__submit"
            />
          </form>
        </div>
      </section>
    </>
  );
}
