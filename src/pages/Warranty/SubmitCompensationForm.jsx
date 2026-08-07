import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "../../components/ui/form/FormField";
import FormSection from "../../components/ui/form/FormSection";
import MainBtn from "../../components/ui/MainBtn";
import { toast } from "sonner";
import HeadTitle from "../../components/ui/HeadTitle";

const DEVICE_TYPE_OPTIONS = [
  { value: "iphone", label: "آيفون" },
  { value: "samsung", label: "سامسونج" },
  { value: "other", label: "أخرى" },
];

const CLAIM_TYPE_OPTIONS = [
  { value: "damage", label: "تلف" },
  { value: "defect", label: "عيب مصنعي" },
  { value: "loss", label: "فقدان" },
];

const validationSchema = yup.object({
  fullName: yup.string().required("الاسم مطلوب"),
  phone: yup.string().required("رقم الجوال مطلوب"),
  email: yup.string().email("بريد إلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
  nationalId: yup.string().required("رقم الهوية مطلوب"),
  storeName: yup.string().required("اسم المحل مطلوب"),
  city: yup.string().required("المدينة مطلوبة"),
  serialNumber: yup.string().required("الرقم التسلسلي مطلوب"),
  deviceType: yup.string().required("نوع الجهاز مطلوب"),
  claimType: yup.string().required("نوع المطالبة مطلوب"),
  notes: yup.string(),
});

export default function SubmitCompensationForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      nationalId: "",
      storeName: "",
      city: "",
      serialNumber: "",
      deviceType: "",
      claimType: "",
      notes: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("بيانات طلب التعويض:", values);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("تم إرسال طلب تعويض الضمان بنجاح!");
      formik.resetForm();
    },
  });

  return (
    <section className="warranty section">
      <div className="main-container">
        <div className="warranty-form__header">
          <HeadTitle value="طلب تعويض الضمان" />
        </div>

        <form className="warranty-form" onSubmit={formik.handleSubmit}>
          <FormSection title="البيانات الشخصية">
              <FormField
                label="الأسم"
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
              placeholder="اكتب اسم المدينة بالحروف العربية فقط، مع إمكانية المسافة بين كلمتين (مثل: مكة المكرمة)"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && formik.errors.city}
            />
          </FormSection>

          <FormSection title="بيانات الجهاز">
            <FormField
              as="select"
              label="نوع الجهاز"
              name="deviceType"
              placeholder="اختر نوع الجهاز"
              options={DEVICE_TYPE_OPTIONS}
              value={formik.values.deviceType}
              onChange={formik.handleChange}
              error={formik.touched.deviceType && formik.errors.deviceType}
            />
            <FormField
              label="الرقم التسلسلي للجهاز"
              name="serialNumber"
              placeholder="ادخل الرقم التسلسلي للجهاز"
              value={formik.values.serialNumber}
              onChange={formik.handleChange}
              error={formik.touched.serialNumber && formik.errors.serialNumber}
            />
          </FormSection>

          <FormSection title="نوع المطالبة">
            <FormField
              as="select"
              fullWidth
              label=""
              name="claimType"
              placeholder="اختر نوع المطالبة"
              options={CLAIM_TYPE_OPTIONS}
              value={formik.values.claimType}
              onChange={formik.handleChange}
              error={formik.touched.claimType && formik.errors.claimType}
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

          <MainBtn
            value={formik.isSubmitting ? "جاري الإرسال..." : "تقديم الطلب"}
            loading={formik.isSubmitting}
            showIcon={false}
            className="warranty-form__submit"
          />
        </form>
      </div>
    </section>
  );
}